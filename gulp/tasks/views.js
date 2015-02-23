// gulp/tasks/views.js

var config     = require('../config').paths,
    gulp       = require('gulp'),
    livereload = require('gulp-livereload');


// Views

gulp.task('views', function() {

    return gulp.src(config.src)
        .pipe(livereload());
});
