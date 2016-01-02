var fs = require("fs");
var config = JSON.parse(fs.readFileSync("./config.json"));
var host = config.host;
var port = config.port;
var express = require("express");

var users = {
    "1": {
        "name":"Rafa XU",
        "twitter": "aaaaatoz"
    },
    "2": {
        "name":"Rafa Zhao",
        "twitter": "aaaaatoz"
    }
};

var app = express();

app.use(express.static(__dirname + "/html"))

app.get("/",function(request,response) {
    response.send("hello");
})
app.get("/hello/:text",function(request,response) {
    response.send("hello " + request.params.text);
})
app.get("/user/:id",function(request,response) {
    var user = users[request.params.id];
    if (user) {
        response.send("rafa: " + request.params.id);
    } else {
        response.send("sorry,no user",404);
    }

})



app.listen(port,host)