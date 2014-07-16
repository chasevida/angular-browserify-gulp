// modules/base/tests/controllers/counter.test.js
'use strict';


describe('Controller Test', function() {

    var controller,
        mockScope   = {}
        ;

    beforeEach(angular.mock.module("mainApp"));

    beforeEach(angular.mock.inject(function ($controller, $rootScope) {
        mockScope   = $rootScope.$new();
        controller  = $controller("CounterController", {
            $scope: mockScope
        });
    }));

    

    // Mocha/Chai Tests
    it('should pass Controller default test', function() {
        expect(true).to.be.true;
    });

    it("creates variable", function () {
        expect(mockScope.counter).to.equal(0);
    });

    it("increments counter", function () {
        mockScope.incrementCounter();
        expect(mockScope.counter).to.equal(1);
    });

    // Jasmine Tests
    /*iit("should pass Controller default test", function () {
        expect(true).toBeTruthy();
    });

    it("creates variable", function () {
        expect(mockScope.counter).toEqual(0);
    });

    it("increments counter", function () {
        mockScope.incrementCounter();
        expect(mockScope.counter).toEqual(1);
    });*/
    
});
