// main.js
'use strict';


var ng          = require('../vendor/angular/angular'),
    ngRoute     = require('../vendor/angular-route/angular-route'),
    base        = require('./modules/base');

module.exports = angular.module('mainApp', ['ngRoute', 'base']);
