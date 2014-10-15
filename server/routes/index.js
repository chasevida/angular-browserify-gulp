// server/routes/index.js

module.exports = function (app) {


    var data = {
        config: app.get('config'),
        env:    app.get('env'),
        title:  app.get('pkg').name
    };

    app.get('/*', function(req, res) {
        res.render('index', data);
    });

};
