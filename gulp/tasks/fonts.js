// gulp/tasks/fonts.js

var config = require('../config').paths,
    gulp   = require('gulp'),
    errors = require('../util/error-handler');


// Fonts

gulp.task('fonts', function() {

    return gulp.src(config.src + 'fonts/**/*')
        .on('error', errors)
        .pipe(gulp.dest(config.dist + 'fonts'));

});
