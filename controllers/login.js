const usersBL = require('../Models/usersBL');


 async function login(req, res) {
  res.render('login', {title: 'Login'})
}

async function logindata(req, res,) {
  const {username, password} = req.body;
  const users = await usersBL.getAll()
  const user = users.find(x => x.username === username && x.password === password)
  if (user) {
    if (user.role === 'Admin') {
      req.session.user = user
      req.session.isAuthenticated = true
      req.session.save(err => {
        if(err) {throw err}})
      res.render('adminMenu', {title: 'Admin'})
    } else {
      req.session.user = user
      req.session.isAuthenticated = true
      req.session.save(err => {
        if(err) {throw err}})
      res.redirect('../menu')    
    }
  } else {
    res.redirect('/')
  }

}

module.exports = {login, logindata}