// declare app
var app = angular.module("todoApp", []);

// create controller
app.controller("todoController", function( $scope ){
  $scope.name = "world";
});