app.controller('PackingController', [
  '$location',
  '$scope',
  'items',
  function($location, $scope, items) {
    // load and set items array from factory
    items.success(function(data) {
      data.items.forEach(function(d){
        d.name = d.name;
        d.description = d.description;
        d.packed = d.packed || false;
      });
      $scope.items = data.items;
    });

    // toggle packed atribute for item
    $scope.togglePacked = function(index) {
      var item = $scope.items[index];
      if(item.packed === true) {
        item.packed = false;
      } else {
        item.packed = true;
      }
    };

    // add item
    $scope.addItem = function() {
      $scope.changeView('/add_item');
    };
    $scope.submitAddItem = function() {
      $scope.items.push({
        'name': $scope.formItemName,
        'description': $scope.formItemDescription,
        'packed': false
      });
      $scope.changeView('/list');
    };

    // edit item
    $scope.editItem = function(index) {
      var item = $scope.items[index];
      // TODO
      $location.path('/edit_item');
    };
    $scope.submitEditItem = function() {
      // TODO
      $scope.changeView('/list');
    };

    // delete item
    $scope.deleteItem = function() {
      // TODO
    };
    $scope.submitDeleteItem = function(index) {
      $scope.items.splice(index, 1);
    };

    // view change handler
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
