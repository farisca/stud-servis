var app=angular.module('aplikacija');

app.controller('HomeController', ['$http','$scope','$location', function ($http, $scope,$location ) {
	$scope.neko = "Ajdin";
	$scope.oglasi=[];
	oglas1= {
		name:"programer",
		company_name: "Atlant",
		city: "Sarajevo",
		id: "1"
	};
	oglas2= {
		name:"programer",
		company_name: "Atlantio",
		city: "Sarajevo",
		id: "1"
	};
	oglas3= {
		name:"programer",
		company_name: "Atlant",
		city: "Sarajevo",
		id: "1"
	};
	$scope.oglasi.push(oglas1);
	$scope.oglasi.push(oglas2);
	$scope.oglasi.push(oglas3);
	console.log(oglas2.company_name);
	/*$http.get('http://html.net/tutorials/php/lesson10_ex1.php?name=Ajdin').success(function(data){
		oglasi=data;
	});*/
}]);