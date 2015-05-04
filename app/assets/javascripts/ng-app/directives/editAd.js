app=angular.module('aplikacija');

app.controller('editAdController', ['$http', '$window', '$location', function($http, $window, $location) {

}]);

app.directive('editAd', function () {
	return {
		restrict: 'E',
		templateUrl: 'editAd.html',
		link: function(scope, element, attrs) {
			scope.kategorija = attrs.kategorija;
			scope.kompanija = attrs.kompanija;
			scope.lokacija = attrs.lokacija;
			scope.opis = attrs.opis;
			scope.trajanje=attrs.trajanje;
		}
	};
});