var app = angular.module('packingApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/list', {
      controller: 'PackingController',
      templateUrl: 'views/list.html'
    })
    .when('/item', {
      controller: 'PackingController',
      templateUrl: 'views/item.html'
    })
    .otherwise({
      redirectTo: '/list'
    });
});
