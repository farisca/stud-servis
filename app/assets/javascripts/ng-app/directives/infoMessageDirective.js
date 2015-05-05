angular.module('aplikacija').directive('infoMessage', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      template: '<div ng-show="isInfo()" class="alert alert-success" role="alert">' +
  			'<span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>' +
  			'{{infoMsg}}</div>'
  };
});