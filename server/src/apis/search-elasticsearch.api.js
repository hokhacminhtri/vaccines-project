const searchElasticApi = require('express').Router();
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

searchElasticApi.get('/', async (req, res) => {
  try {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // disable certificate verification

    const keyword = req.query.keyword.toLowerCase();

    const timeStart = Date.now();
    const response = await axios.get(
      'https://localhost:9200/vaccines,vaccine-packages/_search',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        auth: {
          username: 'elastic',
          password: 'SXnHrzwJBTS3ee_w=5Y=',
        },
        data: {
          query: {
            multi_match: {
              query: keyword,
              fields: ['*'],
            },
          },
        },
      },
    );
    const timeEnd = Date.now();

    return res.json({
      title: `Tìm kiếm từ khoá "${keyword}" với Elasticsearch`,
      matched: `Có ${response.data.hits.total.value} kết quả phù hợp`,
      time: `${((timeEnd - timeStart) / 1000).toFixed(2)} s`,
      response: response.data.hits.hits.map((v) => v._id),
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = searchElasticApi;
