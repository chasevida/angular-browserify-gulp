
var gulp        = require('gulp'),
    open        = require('open');


/* 
 * Open
 * ---------------------------------------------------------------------
 */

gulp.task('open', ['env'], function(done) {

    var opts = global.options || {};
    open(opts.url + opts.port);
    return done();

});


