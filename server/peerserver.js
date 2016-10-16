// Nikolaus 25.09.2016

var PeerServer = require('peer').PeerServer;
var fs = require('fs');
var server = PeerServer({
  path: '/',
  port: 8080,
  ssl: {
    key: fs.readFileSync('/etc/lighttpd/ssl/server.key'),
    cert: fs.readFileSync('/etc/lighttpd/ssl/server.crt')
  }
});
