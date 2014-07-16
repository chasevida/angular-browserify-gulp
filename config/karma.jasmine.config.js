module.exports = function(config) {
    config.set({
        basePath: '../',

        autoWatch: true,

        frameworks: ['jasmine', 'browserify'],

        browsers: ['PhantomJS'],
        //browsers: [process.env.TRAVIS ? 'Firefox' : 'Chrome'],

        plugins: [
            'karma-browserify',
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-phantomjs-launcher',
        ],

        files: [
            'client/js/main.js',
            'client/js/**/*.test.js'
        ],

        preprocessors: {
            'client/js/**/*.js': ['browserify'],
        },

    })
}
