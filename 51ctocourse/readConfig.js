var fs = require("fs");
console.log("starting...");
var content = fs.readFileSync("./config.json");
console.log("content:"+ content);

var config = JSON.parse(content);
console.log("username: ", config.username);

fs.watch("./config.json", function (current,previous) {
    console.log("file changed")
    config = JSON.parse(fs.readFileSync("./config.json"))
    console.log("new config" +  config.version)
})