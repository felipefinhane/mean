var mongoose = require('mongoose');
var model = mongoose.model('Foto');
var controllerFoto = {};

controllerFoto.list = (req, res) => {
    model.find()
        .then((fotos) => {
            res.json(fotos);
        }, (error) => {
            console.log(error)
            res.status(500).json(error);
        });
}

controllerFoto.buscaById = (req, res) => {
    model.findById(req.params.id)
        .then((foto) => {
            if (!foto) 
                throw Error("Foto não encontrada!");
            res.json(foto);
        }, (error) => {
            console.log(error)
            res.status(404).json(error);
        });
}

controllerFoto.removeById = (req, res) => {
    model.remove({_id : req.params.id})
        .then(() => {
            res.sendStatus(204);
        }, (error) => {
            console.log(error)
            res.status(500).json(error);
        });
}

controllerFoto.add = (req, res) => {
    model.create(req.body)
        .then((foto) => {
            res.json(foto);
        }, (error) => {
            console.log(error)
            res.status(500).json(error);
        });
}

controllerFoto.edit = (req, res) => {
    model.findByIdAndUpdate(req.params.id, req.body)
        .then((foto) => {
            res.json(foto);
        }, (error) => {
            console.log(error)
            res.status(500).json(error);
        });
}

module.exports = controllerFoto;