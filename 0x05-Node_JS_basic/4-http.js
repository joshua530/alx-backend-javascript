const http = require('http');

const port = 1245;

const app = http.createServer((_req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
  res.statusCode = 200;
});
app.listen(port);

module.exports = app;
