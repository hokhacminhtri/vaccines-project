const syncVaccinePackagesApi = require('express').Router();
const axios = require('axios');
const { Client } = require('@elastic/elasticsearch');

// ==================== CONNECT ELASTICSEARCH ====================
const client = new Client({
  node: 'https://localhost:9200',
  auth: {
    username: process.env.ELASTIC_USERNAME,
    password: process.env.ELASTIC_PASSWORD,
  },
});

syncVaccinePackagesApi.get('/', async (req, res) => {
  try {
    const responseVaccinePackages = await axios.get(
      'http://localhost:3000/vaccine-package/all',
    );

    function syncVaccinePackages() {
      for (let i = 0; i <= responseVaccinePackages.data.length; ++i) {
        async function run() {
          await client.index({
            index: 'vaccine-packages',
            document: {
              name: responseVaccinePackages.data[i].name,
              prevention: responseVaccinePackages.data[i].prevention,
              desc: responseVaccinePackages.data[i].desc,
              category: responseVaccinePackages.data[i].categories,
              vaccineName: responseVaccinePackages.data[i].vaccines.vaccineName,
            },
          });

          await client.indices.refresh({ index: 'vaccine-packages' });
        }

        run().catch(console.log);
      }
    }

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // disable certificate verification

    // Sync vaccine packages data MongoDB and Elasticsearch
    if (client.indices.exists({ index: 'vaccine-packages' })) {
      client.indices
        .delete({
          index: 'vaccine-packages',
        })
        .then(function () {
          console.log('vaccines index elasticsearch is deleted successfully');
          syncVaccinePackages();
        });
    } else {
      syncVaccinePackages();
    }

    res
      .status(200)
      .send(
        'MongoDB-Elasticsearch vaccine packages were synchronized successfully',
      );
  } catch (error) {
    console.error(error);
  }
});

module.exports = syncVaccinePackagesApi;
