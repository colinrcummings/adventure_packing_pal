app.directive('itemContainer', function() {
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/itemContainer.html'
  };
});
