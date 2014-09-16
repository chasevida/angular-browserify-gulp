// tasks/gigs/templates.js

var gulp          = require('gulp'),
    errors        = require('../util/error-handler'),
    jade          = require('gulp-jade'),
    livereload    = require('gulp-livereload'),
    templateCache = require('gulp-angular-templatecache')


// Templates

gulp.task('templates', ['env'], function() {

    var opts = global.options || {};

    return gulp.src( opts.indir + 'js/modules/**/*.jade' )
        .on( 'error', errors )
        .pipe( jade() )
        .pipe( templateCache({
            module: 'templates',
            standalone: true
        }) )
        .pipe( gulp.dest( opts.builddir ));

});

gulp.task('templates:html', ['env'], function() {

    var opts = global.options || {};

    return gulp.src( opts.indir + 'js/modules/**/*.html' )
        .on( 'error', errors )
        .pipe( templateCache({
            module: 'templates',
            standalone: true
        }) )
        .pipe( gulp.dest( opts.builddir ));

});
