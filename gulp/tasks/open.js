// gulp/tasks/open.js

var config = require('../config'),
    gulp   = require('gulp'),
    open   = require('open');


// Open

gulp.task('open', function(done) {

    open(config.url + config.port);
    return done();

});
