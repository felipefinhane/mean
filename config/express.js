var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var app = express();

//CONFIGURACOES DO EXPRESS
app.set('secret', "COCACOLASEMGAS");
app.use(express.static('./public'));
app.use(bodyParser.json());
consign({
        cwd : 'app'
    })
    .include('model')
    .then('controller')
    .then('route/auth.js')
    .then('route')
    .into(app);

module.exports = app;