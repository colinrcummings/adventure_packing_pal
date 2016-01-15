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
        d.edit = false;
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
      $scope.items.push({
        'name': $scope.newItemName,
        'description': $scope.newItemDescription,
        'packed': false,
        'edit': false
      });
      $scope.goToPackingListView();
    };

    // edit item
    $scope.toggleEdit = function(index) {
      var item = $scope.items[index];
      if(item.edit === true) {
        item.edit = false;
      } else {
        item.edit = true;
      }
    };

    // delete item
    $scope.deleteItem = function(index) {
      var item = $scope.items[index];
      $('#js-item-name').text(item.name);
      $('#js-item-delete').unbind('click');
      $('#js-item-delete').on('click',function(){
        $scope.items.splice(index, 1);
        $scope.$apply();
        $('#js-item-delete-modal').modal('hide');
      });
      $('#js-item-delete-modal').modal('show');
    };

    // view change handlers
    $scope.goToPackingListView = function(){
      $location.path('/packing_list');
    };
    $scope.goToAddItemView = function() {
       $location.path('/add_item');
    };

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
