// modules/base/routes.js
'use strict';


module.exports = ['$routeProvider', function( $routeProvider ) {

    $routeProvider.when('/about', {
        templateUrl: 'base/templates/about-tpl.html',
        controller: 'PageController'
    });

    $routeProvider.when('/contact', {
        templateUrl: 'base/templates/contact-tpl.html',
        controller: 'PageController'
    });

    /*$routeProvider.otherwise({
        redirectTo: '/about'
    });*/

}];

