var passport = require('passport');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../../models').User;

module.exports = {};

module.exports.expressSession = session({
  name: 'sator',
  secret: 'sator app',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true }
});

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, null, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, null, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

module.exports.passport = passport;