
var errors  = require('../util/error-handler'),
    gulp    = require('gulp'),
    karma   = require('gulp-karma');


/* 
 * Test
 * ---------------------------------------------------------------------
 */

gulp.task('test', ['clean', 'env', 'templates'], function() {
    
    var opts = global.options || {};

    return gulp.src( './idontexist' )
        .pipe(karma({
            configFile: './config/karma.config.js',
            action:     'run'
        }))
        .on('error', errors);

});
