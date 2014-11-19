// gulpfile.js

var gulp       = require('gulp'),
    requireDir = require('require-dir'),
    sequence   = require('run-sequence');

requireDir('./gulp/tasks', { recurse: true });



// Task Sequences

gulp.task('default', function(done) {
    sequence([
        'env:dev',
        'favicon',
        'images',
        'styles',
        'scripts:libs',
        'scripts',
        'server'
    ], [
        'watch',
        'open',
        'test'
    ], done);
});

gulp.task('build', [
    'favicon',
    'images',
    'styles',
    'scripts:libs',
    'scripts',
    'test'
]);

gulp.task('run', function(done) {
    sequence(['server'], ['open'], done);
});

