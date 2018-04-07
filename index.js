var http = require('http');
var fs = require('fs');

var server = http.createServer();

fs.readFile('./index.html', 'utf-8', function(err, data){
  server.on('request', function (request, response) {
      response.setHeader("Content-Type", "text/html; charset=utf-8");
      if (request.method === 'GET' && request.url === '/') {
          response.write(data);
              response.end();
      } else {
              response.statusCode = 404;
              response.write('<img src="https://cdn-images-1.medium.com/max/1600/1*ASPrAbd2qtFVSVuru7Y7Rw.png" style="margin: 0 auto; display: flex; justify-content: center">');
              response.end();
      }
  });
})

server.listen(9000);
