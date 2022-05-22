const accountApi = require('express').Router();
const accountController = require('../controllers/account.controller');

accountApi.post('/login', accountController.postLogin);
accountApi.get('/check-token', accountController.getCheckToken);

module.exports = accountApi;
