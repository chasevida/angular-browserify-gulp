// tasks/gigs/server.js

var gulp    = require('gulp'),
    nodemon = require('gulp-nodemon');


// Server

gulp.task('server', ['env'], function () {

    var opts = global.options || {};

    return nodemon({
        script: 'server/server.js',
        ext: 'js html',
        env: {
            'NODE_ENV': opts.isDev ? 'development' : 'production'
        }
    })
    .on('start', [])
    .on('change', [])
    .on('restart', function () {
        console.log('restarted!');
    });
});
