var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
var bodyParser = require("body-parser")


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var pesertasRouter = require('./routes/pesertas');
var TempatWisatasRouter = require('./routes/TempatWisatas');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'keyboard cat', cookie:{ }}));
app.use(bodyParser.urlencoded({extended: true}));

// Route URL
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pesertas', pesertasRouter);
app.use('/TempatWisatas',TempatWisatasRouter);



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

app.get("/", (req,res) => {
  res.render('/index',{campgrounds:campgrounds})
});

app.post('/', (req,res) => {
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name : name, image: image}
  campgrounds.push(newCampground)
  res.redirect('/index');
});


module.exports = app;
