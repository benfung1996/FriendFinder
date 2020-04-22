var friendsData = require("../data/friend.js");

module.exports = function(app) {
    
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });
    
    app.post("/api/friends", function(req, res) {

        var user = req.body;
        var parsed = [];
        var matchName = "";
        var matchImage = "";
        var minDiff = 40;

        user.scores.forEach((element) => {
            parsed.push(parseInt(element))
            user.scores = parsed;
        })

        for (var i = 0; i < friendsData.length; i++) {
            var diff = 0;
            for (var j = 0; j < parsed.length; j++) {
                diff += Math.abs(friendsData[i].scores[j] - parsed[j]);
            }
            if (diff < minDiff) {
                minDiff = diff;
                matchName = friendsData[i].name;
                matchImage = friendsData[i].photo;
            }
        }

        friendsData.push(user);
        res.json({ Name: matchName, Image: matchImage });
    })
    
}
