app.controller('PackingController', ['$scope', function($scope) {
  // TODO make an exteral JSON loaded by XHR and enable user to add / delete items
  $scope.items = [
    {
      name: 'Backpack',
      packed: false
    },
    {
      name: 'Jacket',
      packed: false
    },
    {
      name: 'Boots',
      packed: false
    },
    {
      name: 'Food',
      packed: false
    }
  ];
  $scope.setToPacked = function(index) {
    $scope.items[index].packed = true;
  };
}]);