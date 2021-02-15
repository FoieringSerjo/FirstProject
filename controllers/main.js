const User = require('../Models/usersBL');
// const { v4: uuidv4 } = require('uuid');

async function mainPage(req, res) {
  res.render('MainPage', {title: 'Main page'});
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

async function login(req, res) {
  res.render('login', {title: 'Login'})
}

async function logout(req,res) {
  req.session.destroy(() => {
    res.redirect('/')
  })
}

async function logindata(req, res,) {
  const { username, password } = req.body;
  const users = await User.getAll()
  const user = users.find(x => x.username === username && x.password === password)
  if (user) {
    if (user.role === 'Admin') {
      req.session.user = user
      req.session.isAuthenticated = true
      req.session.save(err => {
        if (err) { throw err }
      })
      res.redirect('menu')
    } else {
      req.session.user = user
      req.session.isAuthenticated = true
      req.session.save(err => {
        if (err) { throw err }
      })
      res.redirect('menu')
    }
  } else {
    res.redirect('/')
  }
}

module.exports = {mainPage, registration, registeruser, login, logout, logindata}