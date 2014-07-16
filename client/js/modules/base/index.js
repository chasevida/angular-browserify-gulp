// modules/base/index.js
'use strict';


var counter     = require('./controllers/counter'),
    page        = require('./controllers/page'),
    title       = require('./controllers/title'),
    ngRoute     = require('../../../vendor/angular-route/angular-route'),
    routes      = require('./routes');

/*
 * Module Controllers
 * ---------------------------------------------------------------------
 */
angular.module('base.controllers', [])
    .controller('CounterController', counter)
    .controller('PageController', page)
    .controller('TitleController', title);


/*
 * Module Namespace
 * ---------------------------------------------------------------------
 */
angular.module('base', [
    'ngRoute',
    'base.controllers'
]);


angular.module('base').config(routes);
