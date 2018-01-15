module.exports = (app) => {
    
    app.route('/app/v1/grupos')
        .get(app.v1.controller.grupo.list)
        .post(app.v1.controller.grupo.add);
    app.route('/app/v1/grupos/:id')
        .get(app.v1.controller.grupo.buscaById)
        .delete(app.v1.controller.grupo.removeById)
        .put(app.v1.controller.grupo.edit);
}