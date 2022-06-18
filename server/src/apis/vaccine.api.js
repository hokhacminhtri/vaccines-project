const vaccineApi = require('express').Router();
const vaccineController = require('../controllers/vaccine.controller');

vaccineApi.get('/all', vaccineController.getAllVaccines);
vaccineApi.get('/list', vaccineController.getVaccineList);
vaccineApi.get('/info/:vaccineId', vaccineController.getVaccineInfo);
vaccineApi.get('/vaccineforhomepage', vaccineController.getVaccineForHomePage);

module.exports = vaccineApi;
