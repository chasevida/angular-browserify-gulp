module.exports = function(config) {
    config.set({

        basePath:           '../',

        autoWatch:          true,
        colors:             true,
        logLevel:           config.LOG_INFO,
        port:               9876,
        reportSlowerThan:   500,

        frameworks: [
            'browserify',
            'mocha', 
            'mocha-debug', 
            'sinon-chai',
        ],

        reporters: ['mocha'],

        client: {
            mocha: {
                ui: 'bdd'
            }
        },

        browsers: ['PhantomJS'],
        //browsers: [process.env.TRAVIS ? 'Firefox' : 'Chrome'],

        files: [
            'client/vendor/angular/angular.js',
            //'client/js/**/*.html',
            'client/js/**/*.test.js'
        ],

        preprocessors: {
            //'client/js/**/*.html': ['browserify'],
            'client/js/**/*.js': ['browserify'],
        },

    })
}
