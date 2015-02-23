// gulp/tasks/images.js

var config     = require('../config'),
    gulp       = require('gulp'),
    gulpif     = require('gulp-if'),
    errors     = require('../util/error-handler'),
    imagemin   = require('gulp-imagemin'),
    livereload = require('gulp-livereload');


// Images

gulp.task('images', function() {

    return gulp.src(config.paths.src + 'img/**/*{png,jpg,gif}')
        .on('error', errors)
        .pipe(gulpif(!config.env.development, imagemin()))
        .pipe(gulp.dest(config.paths.dist + 'img'));

});


gulp.task('favicon', function() {

    return gulp.src(config.paths.src + 'favicon.ico')
        .pipe(imagemin(config.paths.src ))
        .pipe(gulp.dest(config.paths.dist));
});
