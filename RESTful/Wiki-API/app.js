const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

mongoose.connect(
  "mongodb://localhost:27017/wikiDB",
  { useUnifiedTopology: true, useNewUrlParser: true },
  function (err) {
    if (!err) console.log("MongoDB is connected");
  }
);

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Article = mongoose.model("Article", articleSchema);

////////////////////////////////////Requests Targetting Article/////////////////////////////////

app
  .route("/articles")
  .get(function (req, res) {
    Article.find({}, function (err, foundArticles) {
      if (!err) res.send(foundArticles);
      else res.send(err);
    });
  })

  .post(function (req, res) {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });

    newArticle.save(function (err) {
      if (!err) res.send("Successfully added a new article.");
      else res.send(err);
    });
  })

  .delete(function (req, res) {
    Article.deleteMany(function (err) {
      if (!err) res.send("Successfully delete an article.");
      else res.send(err);
    });
  });

////////////////////////////////////Requests Specific Article///////////////////////////////////

app
  .route("/articles/:articleTitle")
  .get(function (req, res) {
    Article.findOne({ title: req.params.articleTitle }, function (
      err,
      foundArticle
    ) {
      if (foundArticle) res.send(foundArticle);
      else res.send("No Articles if found");
    });
  })

  .put(function (req, res) {
    Article.update(
      { title: req.params.articleTitle },
      { title: req.body.title, content: req.body.content },
      { overwrite: true },
      function (err) {
        if (!err) res.send("Successfuly updated");
        else res.send("Failed");
      }
    );
  })

  .patch(function (req, res) {
    Article.update(
      { title: req.params.articleTitle },
      { $set: req.body },
      function (err) {
        if (!err) res.send("Successfully updated");
        else res.send("Failed");
      }
    );
  })

  .delete(function (req, res) {
      Article.deleteOne({title: req.params.articleTitle}, function(err){
        if(!err) res.send("Sucessfully deleted");
        else res.send("Failed");
      });
  });

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
