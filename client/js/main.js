// main.js
'use strict';

var ng          = require('../vendor/angular/angular'),
    ngAnimate   = require('../vendor/angular-animate/angular-animate'),
    ngRoute     = require('../vendor/angular-route/angular-route'),
    fastClick   = require('../vendor/fastclick/lib/fastclick'),
    base        = require('./modules/base'),
    templates   = require('../../build/templates.js');


var app = angular.module('mainApp', [
    'ngAnimate', 'ngRoute', 'templates', 'base'
]);

/*app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);*/

app.run(function() {
    fastClick(document.body);
});

module.exports = app;
