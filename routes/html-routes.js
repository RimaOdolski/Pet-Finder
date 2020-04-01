// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");
//var Pet = require("../models/pet.js");
//var Person = require("../models/person.js");

// Requiring our custom middleware for checking if a user is logged in
//var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  //home page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
    
  });

  //if user clicks "I lost a pet or I found a pet", go to page to enter info about themselves and pet
  app.get("/petInfo", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });  

  app.get("/petFound/:email/:address/:city", function (req, res) {
    res.render("index", {email: req.params.email, address: req.params.address, city: req.params.city});
    //res.sendFile(path.join(__dirname, "../public/test_petFound.html"));
  });

  app.put("/petFound", function (req, res) {
    res.render("index", req.body);
    //res.sendFile(path.join(__dirname, "../public/test_petFound.html"));
  });

  app.get("/petAdded", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/test_petAdded.html"));
  });

  app.get("/alreadyExists", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/test_alreadyExists.html"));
  });

  app.post("/petInfo", function (req, res) {
    console.log(req.body);
   

    db.Pet.findOne({
      raw: true,
      where: {
        microchip: req.body.microchip
      }
    }).then(function(result) {

      //var num = result.microchip;
      //console.log(num);

      if (result == null) {
        db.Pet.create({
          microchip: req.body.microchip,
          breed: req.body.breed,
          color: req.body.color,
          isOwner: req.body.isOwner
        });
        db.Person.create ({
          email: req.body.email,
          address: req.body.address,
          city: req.body.city
        })
        res.json("/petAdded");
      } else {
        console.log (req.body.isOwner);
        if (req.body.isOwner == "true") {
          console.log("Your pet was found!"); //Put HTML with contact info with person that found the pet
          res.json("/petFound");
        }
        else if (req.body.isOwner == "false") {
        console.log("ALREADY EXISTS");
        res.json("/alreadyExists");
        }
      }

      
    });

  });

  //COPIED FROM OLDER PROJ BELOW
  /*app.post("/api/posts", function(req, res) {
    db.Post.create(req.body).then(function(dbPost) {
      res.json(dbPost);
    });
  });*/

};
