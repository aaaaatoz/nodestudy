var fs = require("fs");

console.log("Starting...");

fs.writeFileSync("./write_sync.txt","hello world");
fs.writeFile("./write_async.txt","hello world",function(error){

});

console.log("Ending...")
