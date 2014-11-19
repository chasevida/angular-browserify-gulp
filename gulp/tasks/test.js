// gulp/tasks/test.js

var errors = require('../util/error-handler'),
    gulp   = require('gulp'),
    karma  = require('gulp-karma');


// Test

gulp.task('test', ['templates'], function() {

    return gulp.src('./idontexist')
        .pipe(karma({
            configFile: './config/karma.config.js',
            action:     'run'
        }))
        .on('error', errors);

});
