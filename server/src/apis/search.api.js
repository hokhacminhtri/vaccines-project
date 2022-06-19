const searchApi = require('express').Router();
const searchController = require('../controllers/search.controller');

searchApi.get('/vaccine-mongo-query', searchController.vaccineMongoQuery);
searchApi.get('/vaccine-mongo-fulltext', searchController.vaccineMongoFullText);
searchApi.get('/vaccine-elasticsearch', searchController.vaccineElasticsearch);

module.exports = searchApi;
