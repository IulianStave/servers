const { createServer } = require('http');

// const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Responding on requests on port ${port}`);
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});