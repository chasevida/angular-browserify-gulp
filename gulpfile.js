// gulpfile.js

var gulp       = require('gulp'),
    requireDir = require('require-dir'),
    sequence   = require('run-sequence');

requireDir('./gulp/tasks', { recurse: true });



// Task Sequences

gulp.task('default', function(done) {
    sequence([
        'clean'
    ], [
        'env:dev',
        'favicon',
        'images',
        'styles',
        'scripts:libs',
        'scripts',
        'server'
    ], [
        'browser-sync',
        'watch',
        'test'
    ], done);
});

gulp.task('build', function(done) {
    sequence([
        'clean'
    ], [
        'favicon',
        'images',
        'styles',
        'scripts:libs',
        'scripts',
        'test'
    ], done);
});

gulp.task('run', function(done) {
    sequence(['server'], done);
});
