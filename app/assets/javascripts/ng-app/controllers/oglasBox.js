app=angular.module('aplikacija');

app.controller('oglasBoxController', ['$http', '$window', '$location', function($http, $window, $location) {

}]);

app.directive('oglasBox', function () {
	return {
		restrict: 'E',
		templateUrl: 'oglasBox.html',
		link: function(scope, element, attrs) {
			scope.posao = attrs.nazivPosla;
			scope.poslodavac = attrs.kompanija;
			scope.lokacija = attrs.lokacija;
			scope.slika = attrs.logo;
			alert(attrs.logo);
			scope.prosireno="/oglas/"+attrs.idOglasa;
			scope.kraj=attrs.kraj;
			scope.pozadina="";
			if (attrs.promoviran=='true') scope.pozadina="#E3B35F";
		}
	};
});