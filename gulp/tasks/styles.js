// gulp/tasks/styles.js

var autoprefixer = require('autoprefixer-stylus'),
    axis         = require('axis-css'),
    config       = require('../config'),
    gulp         = require('gulp'),
    gulpif       = require('gulp-if'),
    errors       = require('../util/error-handler'),
    livereload   = require('gulp-livereload'),
    nib          = require('nib'),
    rupture      = require('rupture'),
    stylus       = require('gulp-stylus');


// Styles

gulp.task('styles', function () {

    var stylusOptions = {
        compress: !config.env.development ? true : false,
        use: [nib(), rupture(), axis(), autoprefixer()]
    };

    return gulp.src(config.paths.src + 'styles/style.styl')
        .pipe(stylus(stylusOptions))
        .on('error', errors)
        .pipe(gulp.dest( config.paths.dist + 'css/'))
        .pipe(gulpif(config.env.development, livereload()));

});
