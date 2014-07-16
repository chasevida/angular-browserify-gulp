
var errors  = require('../util/error-handler'),
    gulp    = require('gulp'),
    clean   = require('gulp-rimraf');


/* 
 * Clean
 * ---------------------------------------------------------------------
 */

gulp.task('clean', ['env'], function () {

    var opts = global.options || {};

    return gulp.src( opts.outdir + '**/*', { read: false } )
        .on('error', errors)
        .pipe( clean({ force: true }) );

});
