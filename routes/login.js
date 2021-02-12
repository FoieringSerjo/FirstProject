const express = require('express');
const controller = require('../controllers/login');
const router = express.Router();
const { auth } = require('../middleware/auth');

router.get('/', auth, controller.login);
router.post('/logindata', controller.logindata);


module.exports = router;