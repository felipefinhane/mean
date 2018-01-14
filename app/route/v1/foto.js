module.exports = (app) => {

    app.route('/app/v1/fotos')
        .get(app.controller.v1.foto.list)
        .post(app.controller.v1.foto.add);
    app.route('/app/v1/fotos/:id')
        .get(app.controller.v1.foto.buscaById)
        .delete(app.controller.v1.foto.removeById)
        .put(app.controller.v1.foto.edit);
}