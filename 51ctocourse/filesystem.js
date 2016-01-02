var fs = require("fs")

console.log("lalala...");

fs.readFile("/tmp/async.txt",function(error,data) {
    console.log("content:" + data)
})

console.log("carry on executing...1")

var content = fs.readFileSync("/tmp/sync.txt")

console.log("content:" + content)

console.log("carry on executing...2")