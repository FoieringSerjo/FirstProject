async function authBasic(req, res, next) {
  if(!req.session.isAuthenticated) {
    return res.redirect('/')
  }
  next()
}


async function auth(req, res, next) {
  if(req.session.user) {
    return res.redirect('/menu')
  } 
  next()
}

module.exports = { authBasic, auth }
