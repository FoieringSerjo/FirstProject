
// async function redirectMenu(req, res, next) {
//   if(req.session.user) {
//     res.redirect('/menu')
//   } else {
//     next()
//   }
// }


module.exports = function(req, res, next) {
  res.locals.isAuth = req.session.isAuthenticated
  next()
}
