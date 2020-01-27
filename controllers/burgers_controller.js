var express = require("express");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect("/burger");
});

router.get("/burger", function(req, res) {
  burger.all(function(burgerData) {
    res.render("index", { burger_data: burgerData });
  });
});


router.post("/burger/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    res.redirect("/");
  });
});

router.put("/burger/update", function(req, res) {
  burger.update(req.body.burger_id, function(result) {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;