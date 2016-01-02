var fs = require("fs");

console.log("Starting....");

fs.readFile("/tmp/nohup.out",function(error,data) {
    console.log("content of file:" + data);
});

console.log("Carry on executing...")
