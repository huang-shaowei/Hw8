var http = require('http');

var handleRequest = function(request, response) {
  var datetime = new Date();
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello World!' + datetime );
  
};

var www = http.createServer(handleRequest);
www.listen(8080);
