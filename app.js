const http = require('http');

http.createServer((req, res) => {
  res.write("Hello from CI/CD Pipeline januuu 🚀");
  res.end();
}).listen(3000);
//update
