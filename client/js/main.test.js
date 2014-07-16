// main.test.js
'use strict';

require('../vendor/angular/angular');
require('../vendor/angular-mocks/angular-mocks');
require('./main');


describe('Karma Test', function() {

    // Mocha/Chai Tests
    it('should pass Mocha default test', function() {
        expect(true).to.be.true;
    });

    // Jasmine Tests
    /*iit('should pass Jasmine default test', function() {
        expect(true).toBeTruthy();
    });*/
    
});
