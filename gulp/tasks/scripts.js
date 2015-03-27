// gulp/tasks/scripts.js

var browserify  = require('browserify'),
    config      = require('../config'),
    concat      = require('gulp-concat'),
    errors      = require('../util/error-handler'),
    gulp        = require('gulp'),
    logger      = require('../util/bundle-logger'),
    minifyify   = require('minifyify'),
    reload      = require('browser-sync').reload,
    streamify   = require('gulp-streamify'),
    stringify   = require('stringify'),
    vinylSource = require('vinyl-source-stream');


// Concatenate libs

gulp.task('scripts:libs', function() {

    gulp.src([
            './client/vendor/lodash/dist/lodash.min.js',
            './client/vendor/angular/angular.min.js',
            './client/vendor/angular-animate/angular-animate.js',
            './client/vendor/angular-ui-router/release/angular-ui-router.js',
            './client/vendor/angulartics/dist/angulartics.min.js',
            './client/vendor/angulartics/dist/angulartics-ga.min.js',
            './client/vendor/fastclick/lib/fastclick.js'
        ])
        .pipe(concat('libs.min.js'))
        .pipe(gulp.dest(config.paths.dist + 'js'));

});


// Browserify

gulp.task('scripts', ['templates'], function() {

    var bundleStream = browserify({
        entries:    [config.paths.src + 'js/main'],
        extensions: ['.js', '.html'],
        debug:      true,
    }).transform(stringify(['.html']));

    bundleStream.plugin('minifyify', {
        output: config.paths.dist + 'js/app.min.map.json',
        map:    'app.min.map.json'
    });

    var bundle = function() {
        logger.start();

        return bundleStream
            .bundle()
            .on('error', errors)
            .pipe(vinylSource('app.min.js'))
            .pipe(gulp.dest(config.paths.dist + 'js'))
            .pipe(reload({stream: true}))
            .on('update', bundle)
            .on('end', logger.end);
    };

    return bundle();
});
