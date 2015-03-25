// gulp/tasks/server.js

var browserSync = require('browser-sync'),
    config      = require('../config'),
    gulp        = require('gulp');


gulp.task('browser-sync', function() {

    var proxyPath = config.url.domain + ':' + config.url.port;

    browserSync({
        proxy: proxyPath,
        notify: false
    });
});
