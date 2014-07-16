// modules/base/controllers/counter.js
'use strict';

module.exports = ['$scope', function($scope) {

    $scope.counter = 0;

    $scope.incrementCounter = function() {
        $scope.counter ++;
    };
    
}];

