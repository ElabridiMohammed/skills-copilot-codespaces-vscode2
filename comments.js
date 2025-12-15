//create web server

const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'medium.com';
const port = 80;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/comments') {
    const filePath = path.join(__dirname, 'comments.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Failed to read comments' }));
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

