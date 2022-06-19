const syncVaccinesApi = require('express').Router();
const axios = require('axios');
const { Client } = require('@elastic/elasticsearch');

// Connect Elasticsearch
const client = new Client({
  node: 'https://localhost:9200',
  auth: {
    username: process.env.ELASTIC_USERNAME,
    password: process.env.ELASTIC_PASSWORD,
  },
});

syncVaccinesApi.get('/', async (req, res) => {
  try {
    const responseVaccines = await axios.get(
      'http://localhost:3000/vaccine/all',
    );

    function syncVaccines() {
      for (let i = 0; i <= responseVaccines.data.length; ++i) {
        async function run() {
          await client.index({
            index: 'vaccines',
            document: {
              vaccineId: responseVaccines.data[i]._id,
              name: responseVaccines.data[i].name,
              country: responseVaccines.data[i].country,
              concept: responseVaccines.data[i].concept,
              info: responseVaccines.data[i].info,
              categories: responseVaccines.data[i].categories,
            },
          });

          await client.indices.refresh({ index: 'vaccines' });
        }

        run().catch(console.log);
      }
    }

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // disable certificate verification

    // Sync vaccines data MongoDB and Elasticsearch
    if (client.indices.exists({ index: 'vaccines' })) {
      client.indices
        .delete({
          index: 'vaccines',
        })
        .then(function () {
          console.log('vaccines index elasticsearch was deleted successfully');
          syncVaccines();
        });
    } else {
      syncVaccines();
    }

    res
      .status(200)
      .send('MongoDB-Elasticsearch vaccines were synchronized successfully');
  } catch (error) {
    console.error(error);
  }
});

module.exports = syncVaccinesApi;
