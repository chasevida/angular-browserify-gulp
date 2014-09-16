// tasks/gigs/views.js

var gulp       = require('gulp'),
    livereload = require('gulp-livereload');


// Views

gulp.task('views', ['env'], function() {

    var opts = global.options || {};

    return gulp.src( opts.indir )
        .pipe( livereload() );
});
