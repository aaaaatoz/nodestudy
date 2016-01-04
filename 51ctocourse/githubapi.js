//load the http module
var https = require("https");

var username = "aaaaatoz";

var getrepo = function (username, callback) {
    var options = {
        host: 'api.github.com',
        path: '/users/' + username + '/repos',
        method: 'GET',
        headers: {'user-agent': 'Mozilla/5.0'},
    };

    var request = https.request(options, function (response) {
        var body = '';
        response.on('data', function (chunk) {
            body += chunk.toString('utf8');
        });
        response.on('end', function () {
            var json = JSON.parse(body);
            var repos = [];
            json.forEach(function (repo) {
                repos.push({
                    name: repo.name,
                    description: repo.description
                })
            })
            callback(repos);
        });
    });
    request.end();
};

module.exports.getrepo = getrepo




