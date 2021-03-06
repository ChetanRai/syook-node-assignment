var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');

var routes = require('./routes');

var initDB = require("./db")

var app = express();
var AUTH_TOKEN = "secret"
initDB()
app.set('veiw engine', 'html')
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  var token = req.headers.token
  if (token !== AUTH_TOKEN) {
    return res.send(401, "Unauthorized Access");
  }
  next()
})

app.use('/', routes);


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
  res.json({error: err.message});
});

module.exports = app;
