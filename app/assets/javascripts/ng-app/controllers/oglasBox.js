app=angular.module('aplikacija');

app.controller('oglasBoxController', ['$http', '$window', '$location', '$scope', function($http, $window, $location, $scope) {

}]);

app.directive('oglasBox', ['$http', function ($http) {
	return {
		restrict: 'E',
		templateUrl: 'oglasBox.html',
		link: function(scope, element, attrs) {
			scope.posao = attrs.nazivPosla;
			scope.poslodavac = attrs.kompanija;
			scope.lokacija = attrs.lokacija;
			
			scope.prosireno="/oglas/"+attrs.idOglasa;
			scope.kraj=attrs.kraj;
			scope.pozadina="";
			if (attrs.promoviran=='true') scope.pozadina="#E3B35F";
			scope.slika = '/companies/download_logo?filename=' + attrs.logo
			
		}
	};
}]);