# Hw8
This is a simple Hello World Node.js application with current date and time.
# Script
var http = require('http');

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello World!');
};


var www = http.createServer(handleRequest);
www.listen(8080);
