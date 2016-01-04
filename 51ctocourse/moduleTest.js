var hello = require("./myModule.js");
var gitRepo = require("./githubapi.js");
console.log(hello.hello());

gitRepo.getrepo("aaaaatoz",function(repos) {
    repos.forEach(function(repo){
        console.log(repo.name,repo.description);
    })
})