
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");



var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use(methodOverride("_method"));


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);


  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
//});
