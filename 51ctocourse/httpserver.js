var http =  require("http");
var fs = require("fs");
console.log("Starting");
var host = "127.0.0.1";
var port = 1337;

var server = http.createServer(function(request,response) {
    console.log("Received request: " + request.url)
    fs.readFile("./html/" +  request.url,function(error,data) {
        if (error) {
            response.writeHead(200,{"Content-type":"text/plain"});
            response.end("Sorry, 404");
        } else {
            response.writeHead(200,{"Content-type":"text/html"});
            response.end(data);
        }
    })

})

server.listen(port,host,function(){
    console.log("listening...")
})