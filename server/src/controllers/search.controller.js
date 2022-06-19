const Vaccine = require('../models/mongoose/vaccines.model');
const axios = require('axios');

exports.vaccineMongoQuery = async (req, res) => {
  try {
    const keyword = req.query.keyword.toLowerCase();

    const timeStart = Date.now();
    const vaccines = await Vaccine.find({
      $or: [
        { name: { $regex: keyword, $options: 'mi' } },
        { concept: { $regex: keyword, $options: 'mi' } },
        { info: { $regex: keyword, $options: 'mi' } },
      ],
    });
    const timeEnd = Date.now();

    return res.json({
      title: `Tìm kiếm từ khoá "${keyword}" với Mongo Query`,
      matched: `Có ${vaccines.length} kết quả phù hợp`,
      time: `${((timeEnd - timeStart) / 1000).toFixed(2)} s`,
      vaccines: vaccines.map((v) => v._id),
    });
  } catch (error) {
    console.error('Function mongoFullTextSearch Error: ', error);
    return res.status(500).json();
  }
};

exports.vaccineMongoFullText = async (req, res) => {
  try {
    const keyword = req.query.keyword.toLowerCase();

    const timeStart = Date.now();
    const vaccines = await Vaccine.find({ $text: { $search: keyword } });
    const timeEnd = Date.now();

    return res.json({
      title: `Tìm kiếm từ khoá "${keyword}" với Mongo Text Index search`,
      matched: `Có ${vaccines.length} kết quả phù hợp`,
      time: `${((timeEnd - timeStart) / 1000).toFixed(2)} s`,
      vaccines: vaccines.map((v) => v._id),
    });
  } catch (error) {
    console.error('Function mongoFullTextSearch Error: ', error);
    return res.status(500).json();
  }
};

exports.vaccineElasticsearch = async (req, res) => {
  try {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'; // disable certificate verification

    const keyword = req.query.keyword.toLowerCase();

    const timeStart = Date.now();

    const result = [];
    const promises = [];

    const countRes = await axios.get('https://localhost:9200/vaccines/_count', {
      headers: {
        'Content-Type': 'application/json',
      },
      auth: {
        username: process.env.ELASTIC_USERNAME,
        password: process.env.ELASTIC_PASSWORD,
      },
      data: {
        query: {
          multi_match: {
            query: keyword,
            fields: ['*'],
          },
        },
      },
    });

    const total = countRes.data.count;
    const pageSize = 500;
    const totalPage = Math.ceil(total / pageSize);

    for (let p = 0; p < totalPage; p++) {
      promises.push(
        axios
          .get('https://localhost:9200/vaccines/_search', {
            headers: {
              'Content-Type': 'application/json',
            },
            auth: {
              username: process.env.ELASTIC_USERNAME,
              password: process.env.ELASTIC_PASSWORD,
            },
            data: {
              from: p * pageSize,
              size: pageSize,
              query: {
                multi_match: {
                  query: keyword,
                  fields: ['*'],
                },
              },
              track_total_hits: false,
            },
          })
          .then((vaccines) => result.push(vaccines.data.hits.hits)),
      );
    }

    await Promise.all(promises);
    const timeEnd = Date.now();

    return res.json({
      title: `Tìm kiếm từ khoá "${keyword}" với Elasticsearch`,
      length: result.reduce((sum, r) => sum + r.length, 0),
      time: `${((timeEnd - timeStart) / 1000).toFixed(2)} s`,
    });
  } catch (error) {
    console.error('Function vaccineElasticsearch Error: ', error);
    return res.status(500).json();
  }
};
