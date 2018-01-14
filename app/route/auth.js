module.exports = (app) => {
    app.post('/app/auth', app.controller.auth.auth);
    app.use('/app/*', app.controller.auth.verificaToken);
}