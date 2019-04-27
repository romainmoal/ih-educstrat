const mongoose = require("mongoose");

const GeneralSchema = mongoose.Schema({
  general: {
    fullName: String,
    headline: String,
    company: String,
    school: String,
    location: String,
    connections: Number,
    profileUrl: String,
    connectionDegree: String,
    vmid: String,
    linkedinSalesNavigatorUrl: String,
    mutualConnectionsUrl: String,
    description: String,
    firstName: String,
    lastName: String
  },
  jobs: [
    {
      companyName: String,
      companyUrl: String,
      jobTitle: String,
      dateRange: String,
      location: String,
      description: String
    }
  ],
  schools: [
    {
      schoolUrl: String,
      schoolName: String,
      degree: String,
      degreeSpec: String,
      dateRange: String
    }
  ],
  details: {
    linkedinProfile: String
  },
  skills: [
    {
      name: String,
      endorsements: Number
    }
  ],
  allSkills: String
});

const General = mongoose.model("general", GeneralSchema);

module.exports = General;
