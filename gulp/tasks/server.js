// gulp/tasks/server.js

var config  = require('../config').env,
    gulp    = require('gulp'),
    nodemon = require('gulp-nodemon');


// Server

gulp.task('server',  function () {

    return nodemon({
        script: 'server/server.js',
        ext: 'js html',
        env: {
            'NODE_ENV': config.development ? 'development' : 'production'
        }
    })
    .on('start', [])
    .on('change', [])
    .on('restart', function () {
        console.log('restarted!');
    });
});
