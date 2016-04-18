var connect = require('connect');
var serveStatic = require('serve-static');

var port = 4321;

console.log('Listening on port ' + port);
connect().use(serveStatic(__dirname)).listen(port);
