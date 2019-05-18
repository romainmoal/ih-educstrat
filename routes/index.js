const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile.js");
const ProfileCurricular = require("../models/ProfileCurricular.js");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/main", (req, res, next) => {
  Profile.find()
    .then(ProfileModel => {
      console.log("Retrieved books from DB:", ProfileModel);
      res.render("main", { ProfileModel: ProfileModel });
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
  router.post("/main", (req, res, next) => {
    ProfileCurricular.find({
      schools: { $regex: "^(?i)" + req.body.search }
    }).then(profilesCurricular => {
      res.send({ liste: profilesCurricular });
      console.log(liste);
    });
  });
});

module.exports = router;
