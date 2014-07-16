
var gulp = require('gulp');


var options = {
    indir:  './client/',
    outdir: './public/',
    url:    'http://localhost',
    port:   ':8080',
    isDev:  false
};

/* 
 * Environment
 * ---------------------------------------------------------------------
 */

gulp.task('env', function (done) {
    global.options = options;
    return done();
});

gulp.task('env:dev', ['env'], function (done) {
    global.options.isDev = true;
    return done();
});


