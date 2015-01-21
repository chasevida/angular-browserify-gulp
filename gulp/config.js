// gulp/config.js


module.exports = {
    paths: {
        build: './build/',
        dist:  './public/',
        src:   './client/'
    },
    globs: {
        images:  'client/img/**/*',
        scripts: 'client/js/**/*',
        styles:  'client/styles/**/*',
        views:   'views/**/*'
    },
    url: 'http://localhost',
    port: ':8080',
    env: {
        development: false
    }
};
