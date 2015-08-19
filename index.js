var http = require("http");
var _ip = require("ip");

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello Ezhil Sankar Esakki!!!\n');
}).listen(5000);

// Console will print the message
console.log('Server running at http://'+_ip.address()+':5000/');