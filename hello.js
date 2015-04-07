var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello CIS 440\n'); // Hello WORLD!
}).listen(process.env.PORT, process.env.IP);

console.log('Server running at http://127.0.0.1:1337/');
