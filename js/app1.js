// 在app.js中

var app1Module = angular.module("myApp", []);

app1Module.controller('MyController',
    function ($scope, $timeout) {
        $scope.clock = {
            now: new Date()
        };
        var updateClock = function () {
            $scope.clock.now = new Date();
        };
        setInterval(function () {
            $scope.$apply(updateClock);
        }, 1000);
        //updateClock();
    })
