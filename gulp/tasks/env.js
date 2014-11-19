// gulp/tasks/env.js

var config = require('../config'),
    gulp   = require('gulp');


gulp.task('env:dev', function (done) {

    config.env.development = true;
    return done();
});
