app.directive('itemForm', function() {
  return {
    restrict: 'E',
    scope: {
      formType: '@type',
      formItemName: '=',
      formItemDescription: '='
    },
    templateUrl: 'js/directives/itemForm.html'
  };
});
