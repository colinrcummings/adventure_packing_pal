app.factory('items', ['$http', function($http) {
  return $http.get('data/items.json')
    .success(function(data) {
      return data;
    })
    .error(function(err) {
      return err;
    });
}]);