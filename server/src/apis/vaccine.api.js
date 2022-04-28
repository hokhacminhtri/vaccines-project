const vaccineApi = require('express').Router();
const vaccineController = require('../controllers/vaccine.controller');

vaccineApi.get('/all', vaccineController.getAllVaccines);

module.exports = vaccineApi;
