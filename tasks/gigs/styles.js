// tasks/gigs/styles.js

var axis       = require('axis-css'),
    gulp       = require('gulp'),
    gulpif     = require('gulp-if'),
    errors     = require('../util/error-handler'),
    livereload = require('gulp-livereload'),
    nib        = require('nib'),
    stylus     = require('gulp-stylus');


// Styles

gulp.task('styles', ['env'], function () {

    var opts = global.options || {};

    var stylusOptions = {
        compress: !opts.isDev ? true : false,
        use: [nib(), axis()]
    };

    return gulp.src( opts.indir + 'styles/style.styl' )
        .pipe(stylus( stylusOptions ))
        .on('error', errors)
        .pipe(gulp.dest( opts.outdir + 'css/' ))
        .pipe( gulpif(opts.isDev, livereload() ));

});
