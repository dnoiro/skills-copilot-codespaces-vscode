// create a web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var comments = [];
var server = http.createServer(function (req, res) {
    var parseUrl = url.parse(req.url, true);
    var pathName = parseUrl.pathname;
    if (pathName === '/') {
        fs.readFile('./index.html', function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('404 Not Found');
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else if (pathName === '/submit') {
        var comment = parseUrl.query;
        comments.push(comment);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(JSON.stringify(comments));
    } else {
        var filePath = path.join(__dirname, pathName);
        fs.readFile(filePath, function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end('404 Not Found');
            }
            res.writeHead(200);
            res.end(data);
        });
    }
});

server.listen(3000, function () {
    console.log('Server is running at http://