

module.exports = function (app) {

    app.get('/', function(req, res) {
        res.render('index', {
            config: app.get('config'),
            env:    app.get('env'),
            title:  app.get('pkg').name
        });
    });

};