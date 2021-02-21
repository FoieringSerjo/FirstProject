const express = require('express');
const controller = require('../controllers/main');
const router = express.Router();

router.get('/', controller.mainPage);

router.get('/login', controller.login);

router.get('/logout', controller.logout);

router.get('/registration', controller.registration);

router.post('/registeruser', controller.registeruser);

router.post('/', controller.logindata);

module.exports = router;
