const express = require('express');
const controller = require('../controllers/login');
const router = express.Router();


router.get('/', controller.login);
router.post('/logindata', controller.logindata);


module.exports = router;