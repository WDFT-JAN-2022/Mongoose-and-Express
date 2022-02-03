var express = require("express");
var router = express.Router();
const User = require("../models/User");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/add-user", function (req, res, next) {
  User.create({
    username: "Jesse",
    password: "password1",
    favoriteIceCream: "vanilla",
  })
    .then((results) => {
      console.log("User was created", results);
      res.render("user-page", {
        username: results.username,
        favoriteIceCream: results.favoriteIceCream,
      });
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
});

router.get("/find-user/:username", function (req, res) {
  //Carlos
  User.findOne({ username: req.params.username })
    .then((results) => {
      console.log("User was found", results);
      res.render("user-page", {
        username: results.username,
        favoriteIceCream: results.favoriteIceCream,
      });
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
});

//create a new user
router.post("/create-user", function (req, res, next) {
  // res.json(req.body);
  User.create({
    username: req.body.username,
    password: req.body.password,
    favoriteIceCream: req.body.favoriteIceCream,
  })
    .then((results) => {
      console.log("User was created", results);
      res.render("user-page", {
        username: results.username,
        favoriteIceCream: results.favoriteIceCream,
      });
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
});

module.exports = router;
