'use strict';

var chai            = require('chai'),
    chaiAsPromised  = require('chai-as-promised');

chai.use(chaiAsPromised);

global.chai   = chai;
global.expect = chai.expect;
