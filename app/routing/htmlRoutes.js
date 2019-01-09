// Pull in required dependencies
var path = require("path");

// Export HTML routes
module.exports = function(app) {

    // Survey page
    app.get("/survey", function(req, res) {
        // var filePath = "/../public/survey.html"
        // var resolvedPath = path.resolve(filePath);
        // console.log(path.join(__dirname, "/../public/survey.html"));
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
        // res.sendFile("survey.html", { root: path.join(__dirname + "../public") });
    });

    // Home page
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};