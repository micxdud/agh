import angular from 'angular';
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName = "Sample1";
    $scope.lastName = "Sample2";
});