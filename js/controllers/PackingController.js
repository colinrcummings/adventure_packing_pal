app.controller('PackingController', [
  '$location',
  '$scope',
  'items',
  function($location, $scope, items) {
    // load and set items from factory
    items.success(function(data) {
      data.items.forEach(function(d,i){
        // console.log(d,i);
      });
      $scope.items = data.items;
    });

    // items
    $scope.items = [];

    // add item to items
    $scope.addNewItem = function() {
      $scope.items.push({
        'name': $scope.newItemName,
        'description': $scope.newItemDescription
      });
      $scope.newItemName = '';
      $scope.newItemDescription = '';
      $scope.changeView('/list');
    };

    // remove item from items
    $scope.removeItem = function() {
      // TODO
    };

    // view handler
    $scope.changeView = function(view){
      $location.path(view);
    }

    /*
    // from the former list controller (TODO: redo in PackageController)
    this.list = 1;

    this.setList = function(list) {
      this.list = list;
    };

    this.isActive = function(list) {
      return this.list === list;
    };
    */
  }
]);
