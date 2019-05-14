const express = require('express');
const router  = express.Router();
const Profile = require('../models/Profile.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/main', (req, res, next) => {
  Profile.find()
    .then(testProfile => {
      console.log('Retrieved books from DB:', testProfile);
      res.render('main', { testProfile: testProfile });
    })
    .catch(error => {
      console.log('Error while getting the profile from the DB: ', error);
    })
});


module.exports = router;
