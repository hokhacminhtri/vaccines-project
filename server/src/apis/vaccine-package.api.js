const vaccinePackageApi = require('express').Router();
const vaccinePackageController = require('../controllers/vaccine-package.controller');

vaccinePackageApi.get('/all', vaccinePackageController.getAllPackages);
vaccinePackageApi.get('/list', vaccinePackageController.getPackageList);

module.exports = vaccinePackageApi;
