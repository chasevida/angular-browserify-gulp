// modules/base/routes.js
'use strict';

//var aboutTemplate   = require('./templates/about-tpl.html'),
//    contactTemplate = require('./templates/contact-tpl.html');


module.exports = ['$routeProvider', function( $routeProvider ) {

    $routeProvider.when('/about', {
        templateUrl: 'templates/about-tpl.html',
        //template:   aboutTemplate,
        controller: 'PageController'
    });

    $routeProvider.when('/contact', {
        templateUrl: 'templates/contact-tpl.html',
        //template:   contactTemplate,
        controller: 'PageController'
    });

    /*$routeProvider.otherwise({
        redirectTo: '/about'
    });*/

}];

