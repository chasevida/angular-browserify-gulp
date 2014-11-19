// gulp/tasks/clean.js

var config = require('../config').paths,
    errors = require('../util/error-handler'),
    gulp   = require('gulp'),
    shell  = require('gulp-shell');


// Clean

gulp.task('clean', function () {

    return gulp.src( [config.build, config.dist], { read: false } )
        .on('error', errors)
        .pipe(shell([
            'rm -rf ' + config.build,
            'rm -rf ' + config.dist
        ]));

});
