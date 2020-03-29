// Requiring our models and passport as we've configured it
var db = require("../models");
//var passport = require("../config/passport"); //REMOVED BY PRANITHA

module.exports = function (app) {
  /*app.post("/api/petInfo", function (req, res) {

  });*/

  // Route for logging user out
  app.get("/api/petInfo", function (req, res) {
    db.Pet.findAll().then(function(result) {
      res.json(result);
    });
  });

};
