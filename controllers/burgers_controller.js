// import the following:
// Express
// burger.js
// Create the router for the app, and export the router at the end of your file.
var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

module.exports = router;