// gulp/tasks/scripts.js

var browserify  = require('browserify'),
    config      = require('../config'),
    concat      = require('gulp-concat'),
    errors      = require('../util/error-handler'),
    gulp        = require('gulp'),
    gulpif      = require('gulp-if'),
    logger      = require('../util/bundle-logger'),
    reload      = require('browser-sync').reload,
    source      = require('vinyl-source-stream'),
    streamify   = require('gulp-streamify'),
    stringify   = require('stringify'),
    uglify      = require('gulp-uglify');


// Concatenate libs

gulp.task('scripts:libs', function() {

    gulp.src([
            './client/vendor/lodash/dist/lodash.min.js',
            './client/vendor/angular/angular.js',
            './client/vendor/angular-animate/angular-animate.js',
            './client/vendor/angular-ui-router/release/angular-ui-router.js',
            './client/vendor/angulartics/dist/angulartics.min.js',
            './client/vendor/angulartics/dist/angulartics-ga.min.js',
            './client/vendor/fastclick/lib/fastclick.js',
            './client/vendor/placeholders/config.js'
        ])
        .pipe(concat('libs.js'))
        .pipe(gulp.dest(config.paths.dist + 'js'));

});

// Browserify

gulp.task('scripts', ['templates'], function() {

    var uglifyOptions = {
        mangle: false,
        compress: {
            pure_funcs: ['console.log']
        }
    };

    var bundleStream = browserify({
        entries: [config.paths.src + 'js/main'],
        extensions: ['.js', '.html']
    }).transform(stringify(['.html']));


    var bundle = function() {
        logger.start();

        return bundleStream
            .bundle({ debug: true })
            .on('error', errors)
            .pipe(source('main.js'))
            .pipe(gulpif(!config.env.development, streamify(uglify(uglifyOptions))))
            .pipe(gulp.dest(config.paths.dist + 'js'))
            .pipe(gulpif(config.env.development, reload({stream: true})))
            .on('update', bundle)
            .on('end', logger.end);
    };

    return bundle();
});
