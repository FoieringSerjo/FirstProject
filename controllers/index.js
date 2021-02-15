const User = require('../Models/usersBL');
// const { v4: uuidv4 } = require('uuid');

async function index(req, res) {
  res.render('index', {title: 'Main page'});
}

async function registration(req, res) {
  res.render('registration', {title: 'Registration'});
}

async function registeruser(req, res) {
  const { reg_username, reg_password } = req.body

  try {
    const user = new User({
      username: reg_username,
      password: reg_password,
      role: 'Basic'
    })
    await user.save()
    res.redirect('/login')

  } catch (error) {
    throw error
  }
}

module.exports = {index, registration, registeruser}