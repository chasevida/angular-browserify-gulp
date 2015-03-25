// gulp/tasks/views.js

var config = require('../config').paths,
    gulp   = require('gulp'),
    reload = require('browser-sync').reload;


// Views

gulp.task('views', function() {

    return gulp.src(config.src)
        .pipe(reload({stream: true}));
});
