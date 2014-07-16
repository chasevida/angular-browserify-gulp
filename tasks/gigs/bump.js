
var gulp    = require('gulp'),
    bump    = require('gulp-bump'),
    gutil   = require('gulp-util'),
    path    = require('path'),
    bwr     = require(path.join(__dirname, '../../', 'bower.json'))
    pkg     = require(path.join(__dirname, '../../', 'package.json'));


/* 
 * Bump
 * ---------------------------------------------------------------------
 */

gulp.task('v', function(done) {
    if ( bwr.version !== pkg.version ) {
        gutil.log(gutil.colors.red('WARNING: Versions do not match!'));
    }
    gutil.log(gutil.colors.blue('bower.js    - version: ' + bwr.version));
    gutil.log(gutil.colors.blue('package.js  - version: ' + pkg.version));
    done();
});

gulp.task('major', function() {
    gulp.src(['./package.json', './bower.json'])
        .pipe(bump({ type:'major' }))
        .pipe(gulp.dest('./'));
});

gulp.task('minor', function(){
    gulp.src(['./package.json', './bower.json'])
        .pipe(bump({ type:'minor' }))
        .pipe(gulp.dest('./'));
});

gulp.task('patch', function(){
    gulp.src(['./package.json', './bower.json'])
        .pipe(bump({ type:'patch' }))
        .pipe(gulp.dest('./'));
});
