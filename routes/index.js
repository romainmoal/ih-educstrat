const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile.js");

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
  Profile.find()
    .then(ProfileModel => {
      console.log("Retrieved results from DB:", ProfileModel);
      res.render("sankey", { ProfileModel: ProfileModel });
    })
    .catch(error => {
      console.log("Error while getting the profile from the DB: ", error);
    });
  router.post("/main", (req, res, next) => {
    Profile.find({
      schools: { $regex: "^(?i)" + req.body.search }
    }).then(profiles => {
      res.send({ liste: profiles });
      console.log(liste);
    });
  });
});

module.exports = router;
