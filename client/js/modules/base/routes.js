// modules/base/routes.js
'use strict';


module.exports = ['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

    //$urlRouterProvider.otherwise('/about');

    $stateProvider
    .state('about', {
        url:         '/about',
        templateUrl: 'base/templates/about.html',
        controller:  'PageController as pg'
    })
    .state('contact', {
        url:         '/contact',
        templateUrl: 'base/templates/contact.html',
        controller:  'PageController as pg'
    });

}];
