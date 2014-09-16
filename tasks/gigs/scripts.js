// tasks/gigs/scripts.js

var browserify  = require('browserify'),
    errors      = require('../util/error-handler'),
    gulp        = require('gulp'),
    gulpif      = require('gulp-if'),
    livereload  = require('gulp-livereload'),
    logger      = require('../util/bundle-logger'),
    source      = require('vinyl-source-stream'),
    streamify   = require('gulp-streamify'),
    stringify   = require('stringify'),
    uglify      = require('gulp-uglify');


// Browserify

gulp.task('scripts', ['env', 'templates'], function() {

    var opts = global.options || {};

    var uglifyOptions = {
        mangle: false,
        compress: {
            pure_funcs: ['console.log']
        }
    };

    var bundleStream = browserify({
        entries: [ opts.indir + 'js/main' ],
        extensions: ['.js', '.html'],
    }).transform( stringify(['.html']) );

    var bundle = function() {
        logger.start();

        return bundleStream
            .bundle({ debug: true })
            .on('error', errors)
            .pipe(source( 'main.js' ))
            .pipe( gulpif( !opts.isDev, streamify( uglify(uglifyOptions) )))
            .pipe(gulp.dest( opts.outdir + 'js' ))
            .pipe( gulpif(opts.isDev, livereload() ))
            .on('update', bundle)
            .on('end', logger.end);
    };

    return bundle();
});
