var mongoose = require('mongoose');
var model = mongoose.model('User');
var controllerUser = {};

controllerUser.list = (req, res) => {
    model.find()
        .then((users) => {
            res.json(users);
        }, (error) => {
            console.log(error)
            res.status(500).json(error);
        });
}

controllerUser.buscaById = (req, res) => {
    model.findById(req.params.id)
        .then((user) => {
            if (!user) 
                throw Error("Usuário não encontrado!");
            res.json(user);
        }, (error) => {
            console.log(error)
            res.status(404).json(error);
        });
}

controllerUser.removeById = (req, res) => {
    model.remove({_id : req.params.id})
        .then(() => {
            res.sendStatus(204);
        }, (error) => {
            console.log(error)
            res.status(500).json(error);
        });
}

controllerUser.add = (req, res) => {
    model.create(req.body)
        .then((user) => {
            res.json(user);
        }, (error) => {
            console.log(error)
            res.status(500).json(error);
        });
}

controllerUser.edit = (req, res) => {
    model.findByIdAndUpdate(req.params.id, req.body)
        .then((user) => {
            res.json(user);
        }, (error) => {
            console.log(error)
            res.status(500).json(error);
        });
}

module.exports = controllerUser;