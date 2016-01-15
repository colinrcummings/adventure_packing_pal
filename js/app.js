var app = angular.module('packingApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider

    .when('/packing_list', {
      controller: 'PackingController',
      templateUrl: 'views/packing_list.html'
    })
    .when('/add_item', {
      controller: 'PackingController',
      templateUrl: 'views/add_item.html'
    })
    .otherwise({
      redirectTo: '/packing_list'
    });
  $locationProvider.html5Mode(true);
});
