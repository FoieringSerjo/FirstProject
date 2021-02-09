const express = require('express');
const controller = require('../controllers/index');
const router = express.Router();


router.get('/', controller.index);

router.get('/logout', async (req, res) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
})
router.get('/registration', controller.registration);
router.post('/registeruser', controller.registeruser);

module.exports = router;
