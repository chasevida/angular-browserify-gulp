'use strict';


describe('Home', function() {

    it('should have page title', function() {
        // Mocha will report the spec as slow if it goes over this time in ms.
        this.slow(6000);
        browser.get('/');
        expect( browser.getTitle() ).to.eventually.contain('Angular');
    });


    it('should have nav brand title', function() {

        browser.driver.manage().window().setSize(600, 768);
        browser.get('/');
        browser.waitForAngular();

        var title = element( by.css('.brand') );
        expect( title.getText() ).to.eventually.contain('Angular');

    });

    it('should have a nav menu', function() {

        var list = element.all( by.css('.menu li') );
        expect( list.get(0).getText() ).to.eventually.equal('About');
        expect( list.get(1).getText() ).to.eventually.equal('Contact');

    });

});
