// tasks/gigs/clean.js

var errors  = require('../util/error-handler'),
    gulp    = require('gulp'),
    shell   = require('gulp-shell');


// Clean

gulp.task('clean', function () {

    return gulp.src( ['./public', './build'], { read: false } )
        .on('error', errors)
        .pipe(shell([
            'rm -rf build/',
            'rm -rf public/'
        ]));

});
