const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;
const UserModel = require("./data/models/User");

module.exports = function (passport) {
  passport.use(
    new localStrategy((username, password, done) => {
      UserModel.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser((userId, cb) => {
    UserModel.findOne({ _id: userId }, (err, user) => {
      cb(err, { username: user.username });
    });
  });
};
