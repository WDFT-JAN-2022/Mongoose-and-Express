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
        user: results,
      });
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
});

router.get("/find-user/:username", function (req, res) {
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

router.get("/user/:userId", function (req, res) {
  User.findById(req.params.userId)
    .then((results) => {
      console.log("User was found", results);
      res.render("user-page", results);
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
});

router.get("/create-user", (req, res) => {
  res.render("create-user");
});

//create a new user
router.post("/create-user", function (req, res, next) {
  console.log("THE POST BODY", req.body);
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

router.get("/all-users", (req, res) => {
  User.find()
    .then((results) => {
      console.log("Users found:", results);
      res.render("all-users", { users: results });
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
});

// router.get("/seed", (req, res) => {
//   let users = [
//     {
//       username: "Nick",
//       password: "password1",
//       favoriteIceCream: "chocolate",
//     },
//     {
//       username: "Manny",
//       password: "password1",
//       favoriteIceCream: "vanilla",
//     },
//     {
//       username: "Yaron",
//       password: "password1",
//       favoriteIceCream: "strawberry",
//     },
//     {
//       username: "Juan",
//       password: "password1",
//       favoriteIceCream: "chocolate",
//     },
//     {
//       username: "Lauren",
//       password: "password1",
//       favoriteIceCream: "chocolate",
//     },
//     {
//       username: "Hailey",
//       password: "password1",
//       favoriteIceCream: "strawberry",
//     },
//     {
//       username: "Jesse",
//       password: "password1",
//     },
//     {
//       username: "Wendy",
//       password: "password1",
//       favoriteIceCream: "vanilla",
//     },
//     {
//       username: "Ryan",
//       password: "password1",
//       favoriteIceCream: "vanilla",
//     },
//   ];
//   User.create(users)
//     .then((results) => {
//       console.log("User was created", results);
//       res.json(results);
//       // res.render("user-page", {
//       //   username: results.username,
//       //   favoriteIceCream: results.favoriteIceCream,
//       // });
//     })
//     .catch((err) => {
//       console.log("Something went wrong", err);
//     });
// });

module.exports = router;
