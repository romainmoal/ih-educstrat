const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile.js");
const ProfileCurricular = require("../models/ProfileCurricular.js");

// For passeport
const session = require("express-session");
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");

/* PUBLIC home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/main", ensureLogin.ensureLoggedIn(), (req, res, next) => {
  Profile.find()
    .then(ProfileModel => {
      // console.log("Retrieved books from DB:", ProfileModel);
      res.render("main", { ProfileModel: ProfileModel });
    })
    .catch(error => {
      console.log("Error while getting the profile from the DB: ", error);
    });
});

router.post("/main", ensureLogin.ensureLoggedIn(), (req, res, next) => {
  Profile.find({
    $or: [
      {
        schools: {
          $elemMatch: {
            schoolName: new RegExp("^" + req.body.search.toLowerCase(), "i")
          }
        }
      },
      {
        jobs: {
          $elemMatch: {
            jobTitle: new RegExp("^" + req.body.search.toLowerCase(), "i")
          }
        }
      }
    ]
  })
    .limit(30)
    .then(profiles => {
      res.send({ liste: profiles });
      //console.log(profiles);
    })
    .then(ProfileModel => {
      res.redirect("sankey");
    })
    .catch(error => {
      console.log("Error while getting the profile from the DB: ", error);
    });
});

router.get("/sankey", (req, res, next) => {
  ProfileCurricular.find()
    .then(ProfileCurricularModel => {
      console.log("Retrieved results from DB:", ProfileCurricularModel);
      res.render("sankey", {
        ProfileCurricularModel: JSON.stringify(ProfileCurricularModel)
      });
    })
    .catch(error => {
      console.log("Error while getting the profile from the DB: ", error);
    });
});

module.exports = router;
