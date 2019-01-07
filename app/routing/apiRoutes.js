// Import the list of friend entries
var friends = require('../data/friends.js');

// Export API routes
module.exports = function(app) {

	// Total list of friend entries
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	// Add new friend entry
	app.post("/api/friends", function(req, res) {

        var bestMatch = {
            matchName: "",
            matchImage: "",
            friendDifference:  1000
        };

        console.log(req.body);

		// Capture the user data object
		var userData = req.body;
        var userScores = userData.scores;
        
        console.log(userScores);
		
	    var totalDifference = 0;

		// Examine all existing friends in the list
		for (var i = 0; i < friends.length; i++) {

            console.log(friends[i]);
            totalDifference = 0;

			// Compute differences for each question
			for (var j = 0; j < userScores.length; j++) {
				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
			}

			// If lowest difference, record the friend match
			if (totalDifference <= bestMatch.friendDifference) {

				bestMatch.matchName = friends[i].name;
                bestMatch.matchImage = friends[i].photo;
                bestMatch.friendDifference = totalDifference;
			}
		}

		// Add new user
		friends.push(userData);

		// Return a JSON with the best match
		res.json(bestMatch);
	});
}