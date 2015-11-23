var fs = require("fs");

fs.writeFileSync("cornmodule.txt","for core module test");

console.log(fs.readFileSync("cornmodule.txt").toString());

var path = require("path");

var website = "foo/bar/this/that/index.html";
console.log(path.normalize(website));
console.log(path.dirname(website));
console.log(path.basename(website));
console.log(path.extname(website));