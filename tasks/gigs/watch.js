
var gulp        = require('gulp');

/* 
 * Watch
 * ---------------------------------------------------------------------
 */

gulp.task('watch', ['env'], function() {

    var opts = global.options || {};
    
    gulp.watch( opts.indir + 'img/**/*{png,jpg,gif}',   ['images']);
    gulp.watch( opts.indir + 'styles/**/*.styl',        ['styles']);
    gulp.watch( opts.indir + 'js/**/*.{js,html}',       ['scripts']);
    gulp.watch( './views/**/*.jade',                    ['views']);
    
});