const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//__dirname: current file path
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var result = n1 + n2;
  res.send("The result of the calculation is " + result);
});

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
    var w = parseFloat(req.body.weight);
    var h = parseFloat(req.body.height);
    var result = w / Math.pow(h,2);
    res.send("Your BMI is " + result);
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
