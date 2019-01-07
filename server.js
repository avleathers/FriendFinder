// Required dependencies
var express = require("express");
var app = express();
// var bodyParser = require("body-parser")

var PORT = process.env.PORT || 8080;
app.use(express.static("app/public"));

// Create application/urlencoded parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Path for parsing incoming requests
// app.use(bodyParser.json({type: "application/*+json"}))
// app.use(bodyParser.raw({type: "application/vnd.custom-type"}))
// app.use(bodyParser.text({type: "text/html"}))

// Path to the application routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Best Friend Finder app is listening on PORT: ' + PORT);
});