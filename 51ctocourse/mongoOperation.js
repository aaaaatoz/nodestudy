var mongo = require("mongodb");

var host = "localhost";
var port = 27017

function getuser(id,callback) {
    var db = new mongo.Db("nodejs-instruction", new mongo.Server(host, port, {}));

    db.open(function (error) {
        console.log("we are connected!" + host + ":" + port);

        db.collection("user", function (error, collection) {
            console.log("we have the collection");
            collection.find({"id": id}, function (error, cursor) {
                cursor.toArray(function (error, users) {
                    if (users.length == 0) {
                        callback(false);
                    } else {
                        callback(users[0]);
                    }
                })
            })
        })
    });
}

getuser(1,function(user) {
    if (user) {
        console.log("user is:", user);
    } else {
        console.log("no user!");
    }
})

