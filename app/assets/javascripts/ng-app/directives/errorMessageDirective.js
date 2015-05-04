angular.module('aplikacija').directive('errorMessage', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      template: '<div ng-show="isError()" class="alert alert-danger" role="alert">'+
          '<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>'+
          '<span class="sr-only">Greška:</span>'+
          '{{errorMsg}}</div>'
  };
});