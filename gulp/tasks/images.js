// gulp/tasks/images.js

var config   = require('../config'),
    gulp     = require('gulp'),
    gulpif   = require('gulp-if'),
    errors   = require('../util/error-handler'),
    imagemin = require('gulp-imagemin'),
    reload   = require('browser-sync').reload;


// Images

gulp.task('images', function() {

    return gulp.src(config.paths.src + 'img/**/*{png,jpg,gif}')
        .on('error', errors)
        .pipe(gulpif(!config.env.development, imagemin()))
        .pipe(gulp.dest(config.paths.dist + 'img'))
        .pipe(gulpif(config.env.development, reload({stream: true})));

});


gulp.task('favicon', function() {

    return gulp.src(config.paths.src + 'favicon.ico')
        .pipe(imagemin(config.paths.src ))
        .pipe(gulp.dest(config.paths.dist));
});
