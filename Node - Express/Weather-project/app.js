//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const ejs = require("ejs");

let cityName = "";
let temp = "Temp";
let weatherDescription = "description";
let imageUrl =
  "data:image/png;base64,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";

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");

  res.render("weather", {
    city: cityName,
    currentTemp: temp,
    currentDescription: weatherDescription,
    imgIcon: imageUrl,
  });
});

app.post("/", function (req, res) {
  const query = req.body.cityName;
  const apiKey = "75e33b29e59cfe0c11a74d9fdaf17582";
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    unit;

  https.get(url, function (response) {
    console.log(response.statusCode);

    if (response.statusCode === 200) {
      response.on("data", function (data) {
        const weatherData = JSON.parse(data);
        cityName = query;
        temp = weatherData.main.temp;
        weatherDescription = weatherData.weather[0].description;
        imageUrl =
          "http://openweathermap.org/img/wn/" +
          weatherData.weather[0].icon +
          "@2x.png";
      });
    } else {
      cityName = "";
      temp = "Temp";
      weatherDescription = "description";
      imageUrl =
        "data:image/png;base64,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";
    }
    res.redirect("/");
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}.`);
});

// const object = {
//     name: "Bryan"
// }
// console.log(JSON.stringify(object));

// console.log(weatherDescription);
// res.write("<p>The weather is currently " + weatherDescription + "</p>");
// res.write(
//   "<h1>The temperature in " +
//     query +
//     " is " +
//     temp +
//     " degree Celcius.</h1>"
// );
// res.write("<img src=" + imageUrl + ">");
// res.send();
