const User = require('../Models/usersBL');
// const usersBL = require('../Models/usersBL');

async function index(req, res) {
  res.render('index', {title: 'Main page'});
}

async function registration(req, res) {
  res.render('registration', {title: 'Registration'});
}

async function registeruser(req, res) {
  const user = new User(req.body.rusername, req.body.rpassword)
  await user.save()

  res.redirect('/login')
  // let obj = {
  //   username: req.body.username,
  //   password: req.body.password
  // }

  // let result = await usersBL.createUser(obj)
  // res.render('/login')
}

module.exports = {index, registration, registeruser}