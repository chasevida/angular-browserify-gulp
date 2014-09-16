// tasks/gigs/images.js

var gulp        = require('gulp'),
    gulpif      = require('gulp-if'),
    errors      = require('../util/error-handler'),
    imagemin    = require('gulp-imagemin')
    livereload  = require('gulp-livereload');


// Images

gulp.task('images', ['env'], function() {

    var opts = global.options || {};

    return gulp.src( opts.indir + 'img/**/*{png,jpg,gif}' )
        .on( 'error', errors )
        .pipe( gulpif( !opts.isDev, imagemin() ))
        .pipe( gulp.dest( opts.outdir + 'img' ));

});


gulp.task('favicon', ['env'], function() {

     var opts = global.options || {};

    return gulp.src( opts.indir + 'favicon.ico' )
        .pipe( imagemin( opts.indir ))
        .pipe( gulp.dest( opts.outdir ));
});
