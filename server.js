var http = require('http');
var app = require('./config/express');
require('./config/database')('localhost', 'alurapic');

var port = process.env.PORT || 3000;

http.createServer(app).listen(port, () => {
        console.log('APP UP!');
    }
);