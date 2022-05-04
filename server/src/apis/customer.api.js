const customerApi = require('express').Router();
const customerController = require('../controllers/customer.controller');

customerApi.get('/info/by-code/:code', customerController.getInfoByMemberCode);

module.exports = customerApi;
