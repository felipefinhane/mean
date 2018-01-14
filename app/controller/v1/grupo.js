var mongoose = require('mongoose');
var model = mongoose.model('Grupo');
var controllerGrupo = {};

controllerGrupo.list = (req, res) => {
    model.find()
        .then((grupos) => {
            res.json(grupos);
        }, (error) => {
            console.log(error)
            res.status(500).json(error);
        });
}

controllerGrupo.buscaById = (req, res) => {
    model.findById(req.params.id)
        .then((grupo) => {
            if (!grupo) 
                throw Error("Grupo não encontrado!");
            res.json(grupo);
        }, (error) => {
            console.log(error)
            res.status(404).json(error);
        });
}

controllerGrupo.removeById = (req, res) => {
    model.remove({_id : req.params.id})
        .then(() => {
            res.sendStatus(204);
        }, (error) => {
            console.log(error)
            res.status(500).json(error);
        });
}

controllerGrupo.add = (req, res) => {
    model.create(req.body)
        .then((grupo) => {
            res.json(grupo);
        }, (error) => {
            console.log(error)
            res.status(500).json(error);
        });
}

controllerGrupo.edit = (req, res) => {
    model.findByIdAndUpdate(req.params.id, req.body)
        .then((grupo) => {
            res.json(grupo);
        }, (error) => {
            console.log(error)
            res.status(500).json(error);
        });
}

module.exports = controllerGrupo;