// gulp/tasks/watch.js

var config = require('../config').paths,
    gulp   = require('gulp');


// Watch

gulp.task('watch', function() {

    gulp.watch(config.src + 'img/**/*{png,jpg,gif}',   ['images']);
    gulp.watch(config.src + 'styles/**/*.styl',        ['styles']);
    gulp.watch(config.src + 'js/**/*.{js,html,jade}',  ['scripts']);
    gulp.watch('./views/**/*.jade',                    ['views']);

});
