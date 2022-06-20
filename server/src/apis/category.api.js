const categoryApi = require('express').Router();
const categoryController = require('../controllers/category.controller');

categoryApi.get('/all', categoryController.getAllCategories);

module.exports = categoryApi;
