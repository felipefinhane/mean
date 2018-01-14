module.exports = (app) => {
    
    app.route('/app/v1/grupos')
        .get(app.controller.v1.grupo.list)
        .post(app.controller.v1.grupo.add);
    app.route('/app/v1/grupos/:id')
        .get(app.controller.v1.grupo.buscaById)
        .delete(app.controller.v1.grupo.removeById)
        .put(app.controller.v1.grupo.edit);
}