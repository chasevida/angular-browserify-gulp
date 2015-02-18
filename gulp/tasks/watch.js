// gulp/tasks/watch.js

var globs  = require('../config').globs,
    gulp   = require('gulp'),
    watch  = require('gulp-watch');


var watcher = function(glob, task) {

    gulp.src('./client')
        .pipe(watch(glob, function() {

            gulp.start(task);
        }));

};

// Watch

gulp.task('watch', function() {

    watcher(globs.images,  ['images']);
    watcher(globs.scripts, ['scripts']);
    watcher(globs.styles,  ['styles']);
    watcher(globs.views,   ['views']);

});
