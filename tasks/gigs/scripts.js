// tasks/gigs/scripts.js

var browserify  = require('browserify'),
    concat      = require('gulp-concat'),
    errors      = require('../util/error-handler'),
    gulp        = require('gulp'),
    gulpif      = require('gulp-if'),
    livereload  = require('gulp-livereload'),
    logger      = require('../util/bundle-logger'),
    source      = require('vinyl-source-stream'),
    streamify   = require('gulp-streamify'),
    stringify   = require('stringify'),
    uglify      = require('gulp-uglify');


// Concatenate libs

gulp.task('scripts:libs', ['env'], function() {

    var opts = global.options || {};

    gulp.src([
            './client/vendor/lodash/dist/lodash.min.js',
            './client/vendor/angular/angular.js',
            './client/vendor/angular-animate/angular-animate.js',
            './client/vendor/angular-ui-router/release/angular-ui-router.js',
            './client/vendor/angulartics/dist/angulartics.min.js',
            './client/vendor/angulartics/dist/angulartics-ga.min.js',
            './client/vendor/fastclick/lib/fastclick.js',
            './client/vendor/placeholders/index.js'
        ])
        .pipe(concat('libs.js'))
        .pipe(gulp.dest(opts.outdir + 'js'));

});

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
