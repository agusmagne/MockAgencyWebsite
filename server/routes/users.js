const router = require("express").Router();
const UserModel = require("../data/models/User");
const bcrypt = require("bcryptjs");
const passport = require("passport");
require("log-timestamp");

// Login
router.post("/login", function (req, res, next) {
  passport.authenticate("local", (err, user, info) => {
    if (info) console.log(info);
    if (err) throw err;
    if (!user) res.send("No user found");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send(user);
        console.log(req.user);
      });
    }
  })(req, res, next);
});

router.post("/register", function (req, res, next) {
  UserModel.findOne({ username: req.body.username }, (err, user) => {
    if (err) throw err;
    if (user) res.send("User already exists");
    if (!user) {
      bcrypt.hash(req.body.password, 10).then((pwd) => {
        UserModel({
          username: req.body.username,
          password: pwd,
        })
          .save()
          .then((savedUser) => {
            res.send(savedUser);
          });
      });
    }
  });
});
// Reset password
router.post("/reset-password", function (req, res) {});

module.exports = router;
