// Create web server 

const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/comments') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const comments = [
            { id: 1, text: 'This is the first comment.' },
            { id: 2, text: 'This is the second comment.' }
        ];
        res.end(JSON.stringify(comments));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});
