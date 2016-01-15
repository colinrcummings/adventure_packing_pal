app.controller('PackingController', [
  '$location',
  '$scope',
  'items',
  function($location, $scope, items) {
    // load, configure and set initial items array from factory
    items.success(function(data) {
      data.items.forEach(function(d,i){
        d.name = d.name;
        d.description = d.description;
        d.id = i;
        d.packed = d.packed || false;
      });
      $scope.items = data.items;
    });

    // items array
    $scope.items = [];

    // toggle packed atribute for item
    $scope.togglePacked = function(index) {
      var item = $scope.items[index];
      if(item.packed === true) {
        item.packed = false;
      } else {
        item.packed = true;
      }
    };

    // add new item to items array
    $scope.addNewItem = function() {
      $scope.items.push({
        'name': $scope.newItemName,
        'description': $scope.newItemDescription,
        'id': $scope.items.length,
        'packed': false
      });
      $scope.newItemName = '';
      $scope.newItemDescription = '';
      $scope.changeView('/list');
    };

    // remove item from items array
    $scope.deleteItem = function(index) {
      $scope.items.splice(index,1);
    };

    // view handler
    $scope.changeView = function(view){
      $location.path(view);
    }

    /*
    // TODO
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
