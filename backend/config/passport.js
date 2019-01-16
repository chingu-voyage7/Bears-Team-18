const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const settings = require('../config/settings');
const User = require('../models/User');

module.exports = (passport) => {
  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = settings.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findOne({id: jwt_payload.id})
      .then(user => {
         if(!user) return done(null, false, {message: 'Incorrect email or password.', success: false});
         if(!User.validPassword(password, user.salt, user.hash)){
          return done(null, false, {message: 'Incorrect email or password.', success: false})
        }
        return done(null, user);
      })
      .catch(err => done(err, {message: 'Error logging in. Kindly refresh page', success: false}));
  }));
};
