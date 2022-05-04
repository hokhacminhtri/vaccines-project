const vaccinePackageApi = require('express').Router();
const vaccinePackageController = require('../controllers/vaccine-package.controller');

vaccinePackageApi.get('/all', vaccinePackageController.getAllPackages);

module.exports = vaccinePackageApi;
