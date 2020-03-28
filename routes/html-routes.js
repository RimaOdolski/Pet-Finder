// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
//var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  //home page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    
  });

  //if user clicks "I lost a pet", go to page to enter info about themselves and pet
  app.get("/lostPets", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });

  //if user clicks "I found a pet", go to page to enter info about pet
  app.get("/foundPets", function (req, res) {
    console.log("/foundpetspage");
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });
};
