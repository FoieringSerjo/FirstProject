const session = require("express-session")

async function authBasic(req, res, next) {
  if(!req.session.isAuthenticated) {
    return res.redirect('/')
  }
  next()
}

module.exports = { authBasic }
