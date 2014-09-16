// tasks/gigs/lint.js

var gulp    = require('gulp'),
    jshint  = require('gulp-jshint'),
    stylish = require('jshint-stylish');


// Linting

gulp.task('lint', ['env'], function() {

    var opts = global.options || {};

    return gulp.src([
            opts.indir + 'js/**/*.js',
            '!' + opts.indir + 'js/**/*.test.js'
        ])
        .pipe( jshint() )
        .pipe( jshint.reporter( stylish ) );

});
