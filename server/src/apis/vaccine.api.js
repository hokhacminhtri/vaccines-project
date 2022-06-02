const vaccineApi = require('express').Router();
const vaccineController = require('../controllers/vaccine.controller');

vaccineApi.get('/all', vaccineController.getAllVaccines);
vaccineApi.get('/list', vaccineController.getVaccineList);

module.exports = vaccineApi;
