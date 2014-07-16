// An example configuration file.
exports.config = {

    // Do not start a Selenium Standalone sever - only run this using chrome.
    chromeOnly:     true,
    chromeDriver:   '../node_modules/protractor/selenium/chromedriver',
    framework:      'mocha',
    baseUrl:        'http://localhost:8080',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: [
        '../tests/e2e/initial.test.js', 
        '../tests/e2e/**/*.test.js'
    ],

    mochaOpts: {
        reporter: "spec",
        slow: 3000
    },

    // Run a bootstrap function or file
    onPrepare: '../tests/e2e/bootstrap.js'

};
