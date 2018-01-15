module.exports = (app) => {

    app.route('/app/v1/fotos')
        .get(app.v1.controller.foto.list)
        .post(app.v1.controller.foto.add);
    app.route('/app/v1/fotos/:id')
        .get(app.v1.controller.foto.buscaById)
        .delete(app.v1.controller.foto.removeById)
        .put(app.v1.controller.foto.edit);
}