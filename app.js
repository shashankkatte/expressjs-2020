//  This is refactored code, refer to previous versions on git for detailed code comments!
const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes.handler);
console.log (routes.SomeText);

server.listen(3000);
