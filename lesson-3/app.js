const { createServer } = require('http');
const { magenta } = require('chalk');

const { handleRequest } = require('./routes');

const server = createServer();

const PORT = process.env.PORT || 789;

server.listen(PORT, () => {
  console.log(magenta(`Server started on port ${PORT}`));
});

server.on('request', handleRequest);
