// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Article Schema
var Article = require("./models/Article");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 8080;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect("mongodb://localhost/nytreact");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// This is the route we will send GET requests for saved articles.
app.get("/api/saved", function(req, res) {

  // We will find all the records, sort it in descending order, then limit the records to 5
  Article.find({}).limit(10).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// Main "/" Route. Redirects user to rendered React application.
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// Route to save articles from searches.
app.post("/api/saved", function(req, res) {
  console.log("Article title: " + req.body.title);
  console.log("Article date: " + req.body.date);

  // Save article.
  // Todo: need to add date and url eventually.
  Article.create({
    title: req.body.title,
    date: req.body.date
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved Article");
    }
  });
});

app.delete("/api/saved/:id", function(req, res) {

  console.log("Article ID to delete: " + req.params.id);

  Article.findByIdAndRemove(req.params.id, function (err, response) {
    if(err){
      res.send("Delete didn't work: " + err);
    }
    res.redirect("/");
  });
});

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
