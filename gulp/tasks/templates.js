// gulp/tasks/templates.js

var config = require('../config').paths,
    errors        = require('../util/error-handler'),
    gulp          = require('gulp'),
    jade          = require('gulp-jade'),
    templateCache = require('gulp-angular-templatecache');



// Templates

gulp.task('templates', function() {

    return gulp.src(config.src + 'js/modules/**/*.jade')
        .on('error', errors)
        .pipe(jade())
        .pipe(templateCache({
            module: 'templates',
            standalone: true
        }) )
        .pipe(gulp.dest(config.build));
});

gulp.task('templates:html', function() {

    return gulp.src(config.src + 'js/modules/**/*.html')
        .on('error', errors)
        .pipe(templateCache({
            module: 'templates',
            standalone: true
        }))
        .pipe(gulp.dest(config.build));
});
