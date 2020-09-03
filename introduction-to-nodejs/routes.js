const fs = require('fs');

const handleRequest = (req, res) => {
  const { url, method } = req;

  res.setHeader('Content-Type', 'text/html');

  if (url === '/') {
    fs.readFile('./html/index.html', 'utf-8', (err, data) => {
      res.end(data);
    });
  } else {
    fs.readFile('./html/default.html', 'utf-8', (err, data) => {
      res.end(data);
    });
  }

  if (url === '/message' && method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
      body.push(chunk);
    });

    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];

      fs.writeFile('message.txt', message, (err) => {
        res.writeHeader(302, { Location: '/' });
      });
    });
  }
};

module.exports = { handleRequest };
