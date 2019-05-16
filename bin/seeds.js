module.exports = [
  {
    general: {
      imgUrl: "https://media.licdn.com/dms/image/C4E03AQEISDWoO7lW0g/profile-displayphoto-shrink_800_800/0?e=1561593600&v=beta&t=u-FCAjkebkNnx1ytwCum07T--erwd5zY9YlHUP0_L6s",
      fullName: "Alexandra Epelbaum",
      headline: "M&A",
      school: "Université Paris Dauphine",
      location: "Paris 11, Île-de-France, France",
      connections: "463",
      profileUrl: "https://www.linkedin.com/in/alexandra-epelbaum-22038286/",
      connectionDegree: "2nd",
      vmid: "ACoAABI1WrgBTTvU_ufL09cDFRMUAUX9OdxgQOE",
      linkedinSalesNavigatorUrl: "https://www.linkedin.com/sales/people/ACoAABI1WrgBTTvU_ufL09cDFRMUAUX9OdxgQOE,name",
      mutualConnectionsUrl: "https://www.linkedin.com/search/results/people/?facetNetwork=%5B%22F%22%5D&facetConnectionOf=%5B%22ACoAABI1WrgBTTvU_ufL09cDFRMUAUX9OdxgQOE%22%5D&origin=MEMBER_PROFILE_CANNED_SEARCH&RESULT_TYPE=PEOPLE",
      description: "",
      firstName: "Alexandra",
      lastName: "Epelbaum"
    },
    jobs: [
      {
        companyName: "Crédit Agricole CIB",
        companyUrl: "https://www.linkedin.com/company/2579/",
        jobTitle: "M&A analyst",
        dateRange: "May 2018 – Apr 2019",
        location: null,
        description: null
      },
      {
        companyName: "BNP Paribas Corporate and Institutional Banking",
        companyUrl: "https://www.linkedin.com/company/3880216/",
        jobTitle: "M&A Consumer & Luxury goods Analyst (intern)",
        dateRange: "Oct 2017 – Mar 2018",
        location: null,
        description: "Consumer Goods"
      },
      {
        companyName: "Societe Generale Corporate and Investment Banking - SGCIB",
        companyUrl: "https://www.linkedin.com/company/3496831/",
        jobTitle: "Apprentice - Trade Sales & Flow OTC Derivatives",
        dateRange: "Oct 2016 – Aug 2017",
        location: "Région de Paris, France",
        description: null
      },
      {
        companyName: "Maison ECK",
        companyUrl: "https://www.linkedin.com/company/2030433/",
        jobTitle: "Legal Trainee",
        dateRange: "Jun 2016 – Sep 2016",
        location: "Paris",
        description: "Law office specialized in tax and business laws.\n      \n\n    Drafting of M&A, capital increase and bond issues contracts.\n      \n\n    Participation in M&A due diligence operations.\n      \n\n    \n      Legal researches, tax returns filling, foreign account regularizations..."
      },
      {
        companyName: "Yachting Partners International (YPI)",
        companyUrl: "https://www.linkedin.com/company/273046/",
        jobTitle: "Financial Controller & Compliance Officer Assistant",
        dateRange: "Jul 2014 – Sep 2014",
        location: "Monaco",
        description: "Transfers preparations, bank reconciliations,budget forecasts.\n      \n\n    Drafting of a memo on the fight against money laundering.\n      \n\n    \n      Helping in the organization of the Monaco Yacht Show and the Cannes Yacht Show."
      }
    ],
    schools: [
      {
        schoolUrl: "https://www.linkedin.com/school/12546/?legacySchoolId=12546",
        schoolName: "Université Paris Dauphine",
        degree: "Master 2 Juriste Financier",
        dateRange: "2016 – 2017"
      },
      {
        schoolUrl: "https://www.linkedin.com/school/12537/?legacySchoolId=12537",
        schoolName: "Université Lumière Lyon 2",
        degreeSpec: "Bachelor in law",
        dateRange: "2015 – 2016"
      },
      {
        schoolUrl: "https://www.linkedin.com/search/results/index/?keywords=EMLYON%20Business%20School",
        schoolName: "EMLYON Business School",
        degree: "Master of Science (MSc)",
        degreeSpec: "Management",
        dateRange: "2013 – 2016",
        description: "Major in Finance: Advanced corporate finance, Financial diagnosis, Accounting, LBOs, Structured finance, Capital markets, Fixed income, Financial mathematics for bonds and insurance.Fundamentals: Management, Strategy, Entrepreneurship (business creation project), Marketing, Leadership, Supply Chain."
      },
      {
        schoolUrl: "https://www.linkedin.com/school/11106/?legacySchoolId=11106",
        schoolName: "华东师范大学",
        degree: "ECNU",
        degreeSpec: "Finance",
        dateRange: "2015 – 2015",
        description: "4 months at ECNU, Shanghai studying the following courses:- Financial mathematics for bonds and insurance (ability to take the Financial Mathematics exam from the Society of Actuaries)- Advanced corporate finance (capital budgeting with real options...)- Business finance in Asia - The financing of innovation- Chinese languageI also conducted a consulting mission for Andros China."
      },
      {
        schoolUrl: "https://www.linkedin.com/search/results/index/?keywords=Saint%20Jean%20Douai",
        schoolName: "Saint Jean Douai",
        degreeSpec: "Classes préparatoires",
        dateRange: "2012 – 2013",
        description: "Classes preparing for the competitive entrance examinations to the French Business \"Grandes Ecoles\""
      },
      {
        schoolUrl: "https://www.linkedin.com/search/results/index/?keywords=Ipesup",
        schoolName: "Ipesup",
        degreeSpec: "Classes préparatoires",
        dateRange: "2011 – 2012",
        description: "Classes preparing for the competitive entrance examinations to the French Business \"Grandes Ecoles\""
      },
      {
        schoolUrl: "https://www.linkedin.com/search/results/index/?keywords=Institut%20montalembert",
        schoolName: "Institut montalembert",
        degree: "Baccalauréat S, mention très bien",
        dateRange: "2011"
      },
      {
        schoolUrl: "https://www.linkedin.com/search/results/index/?keywords=emlyon%20business%20school",
        schoolName: "emlyon business school"
      }
    ],
    details: {
      linkedinProfile: "https://www.linkedin.com/in/alexandra-epelbaum-22038286"
    },
    skills: [
      
    ],
    allSkills: ""
  }
]

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Profile = require("../models/Profile");

const bcryptSalt = 10;

mongoose
  .connect('mongodb://localhost/ih-educstrat', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
