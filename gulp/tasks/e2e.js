// gulp/tasks/e2e.js

var gulp        = require('gulp'),
    errors      = require('../util/error-handler'),
    protractor  = require('gulp-protractor').protractor;


// E2E / Protractor

gulp.task('e2e', function() {

    return gulp.src(['./idontexist'])
        .pipe(protractor({
            configFile: './config/protractor.config.js'
        }))
        .on('error', errors);
});
