var friendsData = require("../data/friend.js");

module.exports = function(app) {
    
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });
    
    app.post("/api/friends", function(req, res) {

        var user = req.body;
        var bestMatch = 0;
        var minDiff = 40;

        user.scores.forEach((element) => {
            parseInt(element)
        })

        console.log(user)
     
        for (var i = 0; i < friendsData.legnth; i++) {
            var totalDifference = 0;
            for (var a = 0; a < this.friendsData.scores.length; a++) {
                var diff = Math.abs(user.scores[a] - this.friendsData.scores[a]);
                totalDifference += diff;
                // console.log(totalDifference);
            }

            if (totalDifference < minDiff) {
                bestMatch = i;
                minDiff = totalDifference;
                // console.log(minDiff);
            }

        }

        friendsData.push(user);
        res.json(friendsData[bestMatch]);
        // console.log(friendsData[bestMatch]);
    })
    
}
