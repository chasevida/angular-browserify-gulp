// modules/base/index.js
'use strict';


var page        = require('./controllers/page'),
    routes      = require('./routes');

/*
 * Module Controllers
 * ---------------------------------------------------------------------
 */
angular.module('base.controllers', [])
    .controller('PageController', page);


/*
 * Module Namespace
 * ---------------------------------------------------------------------
 */
angular.module('base', [
    'ui.router',
    'base.controllers'
]);


angular.module('base').config(routes);
