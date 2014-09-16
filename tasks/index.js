// tasks/index.js

var fs          = require('fs'),
    onlyScripts = require('./util/script-filter'),
    tasks       = fs.readdirSync('./tasks/gigs/').filter(onlyScripts)
    ;

tasks.forEach(function(task) {
    require('./gigs/' + task);
});
