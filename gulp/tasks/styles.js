// gulp/tasks/styles.js

var autoprefixer = require('autoprefixer-core'),
    axis         = require('axis'),
    config       = require('../config'),
    gulp         = require('gulp'),
    gulpif       = require('gulp-if'),
    filter       = require('gulp-filter'),
    errors       = require('../util/error-handler'),
    nib          = require('nib'),
    postcss      = require('gulp-postcss'),
    reload       = require('browser-sync').reload,
    rupture      = require('rupture'),
    sourcemaps   = require('gulp-sourcemaps'),
    stylus       = require('gulp-stylus');


// Styles

gulp.task('styles', function () {

    var stylusOptions = {
        compress: !config.env.development ? true : false,
        use: [nib(), rupture(), axis()]
    };

    var processors = [
        autoprefixer({browsers: 'last 2 versions, > 5%, ie 9'})
    ];

    return gulp.src(config.paths.src + 'styles/style.styl')
        .pipe(gulpif(config.env.development, sourcemaps.init()))
        .pipe(stylus(stylusOptions))
        .pipe(postcss(processors))
        .pipe(gulpif(config.env.development, sourcemaps.write('.')))
        .on('error', errors)
        .pipe(gulp.dest( config.paths.dist + 'css/'))
        .pipe(filter('**/*.css'))
        .pipe(gulpif(config.env.development, reload({stream: true})));

});
