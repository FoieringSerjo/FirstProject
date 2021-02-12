async function authBasic(req, res, next) {
  if(!req.session.isAuthenticated) {
    return res.redirect('/')
  }
  next()
}


async function auth(req, res, next) {
  if(req.session.user) {
    res.redirect('/menu')
  } else {
    next()
  }
}

module.exports = { authBasic, auth }
