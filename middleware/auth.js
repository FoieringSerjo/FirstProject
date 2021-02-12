function authBasic(req, res, next) {
  if(!req.session.isAuthenticated) {
    return res.redirect('/')
  }
  next()
}

module.exports = { authBasic }


// async function redirectMenu(req, res, next) {
//   if(req.session.user) {
//     res.redirect('/menu')
//   } else {
//     next()
//   }
// }
