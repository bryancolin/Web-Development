//jshint esversion:6

const express = require("express");

const app = express();

//First Parameter: Route
//Second Parameter: req: request,res: response

app.get("/", function (req, res) {
  // console.log(req);
  res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at: ");
});

app.get("/about", function (req, res) {
  res.send("<h1>Name: Bryan Colin</h1><br><h1>Gender: Male</h1>");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
