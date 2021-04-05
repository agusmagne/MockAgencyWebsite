// Initiate database
require("./data/database/database");

// Add date to console logs
require("log-timestamp");

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const expresSession = require("express-session");
const app = express();

const secrets = ["secret1", "secret2"];

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(
  logger(
    ":date[iso] :method :url :status :response-time ms - :res[content-length]"
  )
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  expresSession({
    secret: secrets,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser(secrets));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

// Root endpoints
app.use("/users", require("./routes/users"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.log(err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
// });
module.exports = app;
