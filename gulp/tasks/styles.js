// gulp/tasks/styles.js

var autoprefixer = require('autoprefixer-core'),
    axis         = require('axis-css'),
    config       = require('../config'),
    gulp         = require('gulp'),
    gulpif       = require('gulp-if'),
    filter       = require('gulp-filter'),
    errors       = require('../util/error-handler'),
    nib          = require('nib'),
    postcss      = require('gulp-postcss'),
    reload       = require('browser-sync').reload,
    rupture      = require('rupture'),
    stylus       = require('gulp-stylus');


// Styles

gulp.task('styles', function () {

    var stylusOptions = {
        compress: !config.env.development ? true : false,
        use: [nib(), rupture(), axis()]
    };

    var processors = [
        autoprefixer({browsers: ['last 2 version']})
    ];

    return gulp.src(config.paths.src + 'styles/style.styl')
        .pipe(stylus(stylusOptions))
        .pipe(postcss(processors))
        .on('error', errors)
        .pipe(gulp.dest( config.paths.dist + 'css/'))
        .pipe(filter('**/*.css'))
        .pipe(gulpif(config.env.development, reload({stream: true})));

});
