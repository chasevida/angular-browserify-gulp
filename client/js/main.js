// main.js
'use strict';

var base      = require('./modules/base'),
    templates = require('../../build/templates.js');


var app = angular.module('mainApp', [
    'ngAnimate', 'ui.router', 'angulartics', 'angulartics.google.analytics',
    'templates', 'base'
]);

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
}]);

app.run(function() {
    FastClick.attach(document.body);
});

module.exports = app;
