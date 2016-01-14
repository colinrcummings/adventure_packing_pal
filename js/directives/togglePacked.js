app.directive('togglePacked', function() {
  return {
    restrict: 'E',
    scope: {
    },
    templateUrl: 'js/directives/togglePacked.html',
    link: function(scope) {
      scope.packed = false,
      scope.titleText= 'Pack item',
      scope.togglePacked = function() {
        if(scope.packed) {
          scope.titleText = 'Pack item';
          scope.packed = false;
        } else {
          scope.titleText = 'Unpack item';
          scope.packed = true;
        }
      }
    }
  };
});
