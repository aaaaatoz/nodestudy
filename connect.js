var connect = require("connect");
var http = require("http");

var app = connect();

function about(request,response){
    console.log("user request about");
}

function profile(request,response){
    console.log("user request profile");
}

app.use("/profile",profile);
app.use("/about",about);



http.createServer(app).listen(8888);
console.log("server started...");

