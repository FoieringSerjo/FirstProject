const express = require('express');
const controller = require('../controllers/menu');
const router = express.Router();
const { authBasic } = require('../middleware/auth');

router.get('/', authBasic, controller.menu);
router.get('/createmovie', authBasic, controller.createmovie);
router.get('/searchmovie', authBasic, controller.searchmovie);
router.get('/searchmovie/:id', controller.movieByID);
router.post('/searchmovie/search', controller.movieSearchBar);
router.post('/', controller.addmovie);


module.exports = router;