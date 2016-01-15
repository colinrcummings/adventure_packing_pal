var app = angular.module('packingApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider

    .when('/packing_list', {
      controller: 'PackingController',
      templateUrl: 'views/packing_list.html'
    })
    .when('/add_item', {
      controller: 'PackingController',
      templateUrl: 'views/add_item.html'
    })
    .when('/edit_item', {
      controller: 'PackingController',
      templateUrl: 'views/edit_item.html'
    })
    .otherwise({
      redirectTo: '/packing_list'
    });
});
