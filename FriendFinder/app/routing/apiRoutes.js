var friendsData = requrie("../data/friend.js");

module.exports = function(app) {
    
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });
    
    app.post("/api/friends", function(req, res) {
        for (var i = 0; i < friendsData.legnth; i++) {
            
        }
    })
    
}
