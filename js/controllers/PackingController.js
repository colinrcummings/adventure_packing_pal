app.controller('PackingController', ['$scope', function($scope) {
  $scope.items = [
    {
      name: 'Pack',
      description: '30L Worksack',
      packed: false
    },
    {
      name: 'Midlayer',
      description: 'R1 Pullover',
      packed: false
    },
    {
      name: 'Boots',
      description: 'Vasques with 400 gram Thinsulate',
      packed: false
    },
    {
      name: 'Food',
      description: 'Kind bars, cheese, shot blocks',
      packed: false
    }
  ];
  $scope.togglePacked = function(index) {
    var item = $scope.items[index];
    if(item.packed === true) {
      item.packed = false;
    } else {
      item.packed = true;
    }
  };
}]);