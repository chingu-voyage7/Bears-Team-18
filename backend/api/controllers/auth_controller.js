const passport = require('passport');
const settings = require('../../config/settings');
require('../../config/passport')(passport);
const jwt = require('jsonwebtoken');
const slugify = require('slugify');
const User = require("../../models/User");

module.exports.register = (req, res) => {
  console.log(req.body);
  if (!req.body.username || !req.body.password) {
    return res.json({success: false, msg: 'Enter a username and password.'});
  } else {
    const newUser = {
      username: slugify(req.body.username.toLowerCase()),
      password: req.body.password
    };
    User.addUser(newUser)
      .then(user => {
        res.json({success: true, msg: 'Hello Gamer, Kindly login to continue.'})
      })
      .catch(err => {
        console.log(err);
        return res.json({success: false, msg: 'Username already exists'})
      });
  }
}

module.exports.login = (req, res) => {
  User.findOne({username: slugify(req.body.username.toLowerCase()) })
    .then(user => {
      if(!user) return res.status(401).json({success: false, msg: 'Incorrect username or password'});
      else {
        User.comparePassword(req.body.password, user)
            .then(isMatch => {
              if(isMatch.success) {
                const token = jwt.sign(user.toJSON(), settings.secret);
                const authenticated_user = {
                  username: user.username,
                  level: user.level,
                  score: user.score
                }
                return res.json({success: true, user: authenticated_user, token: `JWT ${token}`, msg: `Hello ${user.username}, Welcome and Good Luck.`});
              } else {
                return res.json({success: false, msg: 'Incorrect username or password'});
              }
            }).catch(err => {
              console.log(err);
              return res.status(401).json({success: false, msg: 'Authentication failed. Wrong password.'})
            });
      }
    });
}
