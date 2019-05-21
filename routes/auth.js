const express = require('express');
const router  = express.Router();
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");

// User model
const User           = require("../models/User");

// BCrypt to encrypt passwords
const bcrypt         = require("bcrypt");
const bcryptSalt     = 10;

// signup
router.get('/signup', (req, res, next) => {
  res.render('auth/signup');
});

router.post("/signup", (req, res, next) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const username = req.body.username;
  const password = req.body.password;

  if (lastname === "" || firstname === "" || username === "" || password === "" ) {
    res.render("auth/signup", { errorMessage: "All the fields are compulsory" });
    return;
  }

  User.findOne({ username })
  .then(user => {
    if (user !== null) {
      res.render("auth/signup", { errorMessage: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass
    });

    newUser.save((err) => {
      if (err) {
        res.render("auth/signup", { errorMessage: "Something went wrong" });
      } else {
        res.redirect("/");
      }
    });
  })
  .catch(error => {
    next(error)
  })
});

// log in
router.get("/login", (req, res, next) => {
  res.render("auth/login");
});

router.post("/login", passport.authenticate("local", {
  // successRedirect: "/home/:id",
  successRedirect: "/main",
  failureRedirect: "/",
  failureFlash: true,
  passReqToCallback: true
}));

router.post("/login", (req, res, next) => {
  const theUsername = req.body.username;
  const thePassword = req.body.password;

  if (theUsername === "" || thePassword === "") {
    res.render("auth/login", {
      errorMessage: "Please enter both, username and password to sign up."
    });
    return;
  }

  User.findOne({ "username": theUsername })
  .then(user => {
      if (!user) {
        res.render("auth/login", {
          errorMessage: "The username doesn't exist."
        });
        return;
      }
      if (bcrypt.compareSync(thePassword, user.password)) {
        // Save the login in the session!
        req.session.currentUser = user;
        res.redirect("/main");
      } else {
        res.render("auth/login", {
          errorMessage: "Incorrect password"
        });
      }
  })
  .catch(error => {
    next(error);
  })
});

// update profile
router.get("/profile/edit", (req, res, next) => {
  res.render("auth/update");
});

router.get("/profile/edit", (req, res, next) => {
  User.findOne({_id: req.query._id})
  .then((user) => {
    res.render("auth/update", {user});
  })
  .catch((error) => {
    console.log(error);
  })
});

router.post("/profile/edit", (req, res, next) => {
  const { firstname, lastname, username, password } = req.body;
  User.update({_id: req.query.book_id}, { $set: { firstname, lastname, username, password }})
  .then((user) => {
    res.redirect('/main');
  })
  .catch((error) => {
    console.log(error);
  })
});

// log out
router.get("/logout", ensureLogin.ensureLoggedIn(), (req, res) => {
  res.render("auth/logout", { user: req.user });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/logout");
});

module.exports = router;