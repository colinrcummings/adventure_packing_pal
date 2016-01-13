var app = angular.module('packingApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'PackingController',
      templateUrl: 'views/packing.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});