var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const bodyParser = require('body-parser');

const variables = require('./middleware/variables');





const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const menuRouter = require('./routes/menu');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const TWO_HOURS = 1000 * 60 * 60 * 2;


app.use(session({
  secret: 'some secret value',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: TWO_HOURS,
    sameSite: true
  }
}))
app.use(variables)

app.use('/', indexRouter);
app.use('/register', indexRouter)
app.use('/login', loginRouter);
app.use('/menu', menuRouter);
app.use('/createmovie', menuRouter);
app.use('/searchmovie', menuRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
