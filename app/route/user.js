module.exports = (app) => {
    
    app.route('/app/v1/user')
        .get(app.controller.user.list)
        .post(app.controller.user.add);
    app.route('/app/v1/user/:id')
        .get(app.controller.user.buscaById)
        .delete(app.controller.user.removeById)
        .put(app.controller.user.edit);
}