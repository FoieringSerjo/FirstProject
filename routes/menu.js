const express = require('express');
const controller = require('../controllers/menu');
const router = express.Router();
const { authBasic } = require('../middleware/auth');

router.get('/', authBasic, controller.menu);
router.get('/createmovie', authBasic, controller.createmovie);
router.get('/movies', authBasic, controller.movies);
router.get('/movies/:id', controller.movieByID);
router.post('/movies', controller.movieSearchBar);
router.post('/', controller.addmovie);


module.exports = router;