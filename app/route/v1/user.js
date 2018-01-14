module.exports = (app) => {
    
    app.route('/app/v1/user')
        .get(app.controller.v1.user.list)
        .post(app.controller.v1.user.add);
    app.route('/app/v1/user/:id')
        .get(app.controller.v1.user.buscaById)
        .delete(app.controller.v1.user.removeById)
        .put(app.controller.v1.user.edit);
}