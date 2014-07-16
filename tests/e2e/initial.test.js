'use strict';


describe('Protractor Test', function() {

    it('should still do normal tests', function() {
        expect(true).to.equal(true);
    });

    it('should expose the correct global variables', function() {
        expect(protractor).to.exist;
        expect(browser).to.exist;
        expect(by).to.exist;
        expect(element).to.exist;
        expect($).to.exist;
    });

});
