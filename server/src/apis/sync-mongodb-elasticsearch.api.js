const syncMongoElasticApi = require('express').Router();
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

syncMongoElasticApi.get('/', async (req, res) => {
  try {
    const responseData = await axios.get('http://localhost:3000/vaccine/all');

    function syncData() {
      for (let i = 0; i <= responseData.data.length; ++i) {
        async function run() {
          await client.index({
            index: 'vaccines',
            document: {
              name: responseData.data[i].name,
              country: responseData.data[i].country,
              concept: responseData.data[i].concept,
              info: responseData.data[i].info,
            },
          });

          await client.indices.refresh({ index: 'vaccines' });
        }

        run().catch(console.log);
      }
    }

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // disable certificate verification

    if (client.indices.exists({ index: 'vaccines' })) {
      client.indices
        .delete({
          index: 'vaccines',
        })
        .then(
          function () {
            console.log('vaccines index elasticsearch is deleted successfully');
            syncData();
            res
              .status(200)
              .send('MongoDB-Elasticsearch data was synchronized successfully');
          },
          function (err) {
            console.trace(err.message);
          },
        );
    } else {
      syncData();
      res
        .status(200)
        .send('MongoDB-Elasticsearch data was synchronized successfully');
    }
  } catch (error) {
    console.error(error);
  }
});

module.exports = syncMongoElasticApi;
