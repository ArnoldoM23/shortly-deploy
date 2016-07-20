var app = require('./server-config.js');

var port = 8080;

app.listen('port', process.env.PORT || port);


