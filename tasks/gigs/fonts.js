// tasks/gigs/fonts.js

var gulp        = require('gulp'),
    errors      = require('../util/error-handler');


// Fonts

gulp.task('fonts', ['env'], function() {

    var opts = global.options || {};

    return gulp.src( opts.indir + 'fonts/**/*' )
        .on( 'error', errors )
        .pipe( gulp.dest( opts.outdir + 'fonts' ));

});
