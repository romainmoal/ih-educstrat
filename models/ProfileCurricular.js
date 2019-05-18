const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileCurricularModel = new Schema({
  curriculumJobs: [
    {
      from: {
        company: String,
        title: String
      },
      to: {
        company: String,
        title: String
      }
    }
  ],
  curriculumSchools: [
    {
      from: {
        schoolName: String,
        degree: String
      },
      to: {
        schoolName: String,
        degree: String
      }
    }
  ],
  skills: [
    {
      name: String,
      endorsements: String
    }
  ]
});

const ProfileCurricular = mongoose.model(
  "profilesCurricular",
  ProfileCurricularModel
);
module.exports = ProfileCurricular;
