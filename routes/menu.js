const express = require('express');
const controller = require('../controllers/menu');
const router = express.Router();
const auth = require('../middleware/auth');

router.get('/', auth, controller.menu);
router.get('/createmovie', auth, controller.createmovie);
router.get('/searchmovie', auth, controller.searchmovie);
router.get('/searchmovie/:id', controller.movieByID);
router.post('/searchmovie/search', controller.movieSearchBar);
router.post('/', controller.addmovie);


module.exports = router;