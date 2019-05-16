const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectProfile = new Schema({
  general: {
    imgUrl: { type: String },
    fullName: { type: String },
    headline: { type: String },
    school: { type: String },
    location: { type: String },
    connections: { type: String },
    profileUrl: { type: String },
    connectionDegree: { type: String },
    vmid: { type: String },
    linkedinSalesNavigatorUrl: { type: String },
    mutualConnectionsUrl: { type: String },
    firstName: { type: String },
    lastName: { type: String }
  },
  jobs: [
    {
      // a ajouter, le numéro du job ?
      companyName: String,
      companyUrl: String,
      jobTitle: String,
      dateRange: String,
      location: String
    }
  ],
  schools: [
    {
      schoolUrl: String,
      schoolName: String,
      degree: String,
      dateRange: String
    }
  ],
  details: {
    linkedinProfile: String
  },
  skills: [
    {
      // a ajouter, le numéro du job ?
      name: String,
      endorsements: String
    }
  ],
  allSkills: String
});

const Profile = mongoose.model("profiles", ProjectProfile);
module.exports = Profile;
