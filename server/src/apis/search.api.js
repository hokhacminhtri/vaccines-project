const searchApi = require('express').Router();
const searchController = require('../controllers/search.controller');

searchApi.get('/vaccine-mongo-query', searchController.vaccineMongoQuery);

module.exports = searchApi;
