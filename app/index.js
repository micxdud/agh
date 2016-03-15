import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
const ngModule = angular.module('app', []);

ngModule.controller('myCtrl', function($scope) {
    $scope.firstName = "Sample1";
    $scope.lastName = "Sample2";
    $scope.movies = [
        {title: "Film1", desc: "Opis1"},    
        {title: "Film2", desc: "Opis2"},    
        {title: "Film3", desc: "Opis3"},    
        {title: "Film4", desc: "Opis4"},    
        {title: "Film5", desc: "Opis5"},    
        {title: "Film6", desc: "Opis6"},
    ]
});