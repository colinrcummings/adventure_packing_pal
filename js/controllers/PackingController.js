app.controller('PackingController', ['$scope', 'items', function($scope, items) {
  items.success(function(data) {
    $scope.items = data.items;
  });
}]);
