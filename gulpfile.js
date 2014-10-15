// gulpfile.js

var gulp     = require('gulp'),
    sequence = require('run-sequence'),
    tasks    = require('./tasks');


// General Commands

gulp.task('default', function(done) {
    sequence(
        ['env:dev', 'lint', 'favicon', 'images', 'styles', 'scripts:libs', 'scripts', 'server'],
        ['watch', 'open', 'test'], done);
});

gulp.task('build', ['lint', 'favicon', 'images', 'styles', 'scripts:libs', 'scripts', 'test']);

gulp.task('run', function(done) {
    sequence(['server'], ['open'], done);
});

gulp.task('build:run', function(done) {
    sequence(['build'], ['run'], done);
});
