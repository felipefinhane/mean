var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var model = mongoose.model('User');

module.exports = (app) => {
    var controllerAuth = {};

    controllerAuth.auth = (req, res) => {
        console.log('AUTENTICANDO....');
        model.findOne({
            login: req.body.login,
            password: req.body.password
        })
        .then((user) => {
            if (!user) {
                console.log('USUARIO NAO ENCONTRADO');
                res.sendStatus(401);
            } else {
                console.log('GERANDO TOKEN...');
                var token = jwt.sign({
                    login: user.login},
                    app.get('secret'),
                    {expiresIn : 84600}
                );
                console.log(token);
                res.set('x-access-token', token);
                res.end();
            }
        }, (error) => {
            console.log(error)
            res.sendStatus(401);
        });
    }

    controllerAuth.verificaToken = (req, res, next) => {
        var token = req.headers['x-access-token'];
        if (token) {
            console.log('verificando token.....' + token);
            jwt.verify(token, app.get('secret'), (err, decoded) => {
                if (err) {
                    console.log('TOKEN REJEITADO!');
                    res.sendStatus(401);
                }
                req.user = decoded;
                next();
            });    
        }else {
            console.log('Token não enviado');
            res.sendStatus(401);
        }
        
    }

    return controllerAuth;
}