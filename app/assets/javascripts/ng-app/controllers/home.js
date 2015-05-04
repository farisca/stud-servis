var app=angular.module('aplikacija');

app.controller('HomeController', ['$http','$scope','$location', function ($http, $scope,$location ) {
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
	//$scope.oglasi.push(oglas1);
	//$scope.oglasi.push(oglas2);
	//$scope.oglasi.push(oglas3);
	kon = $http.get({url: '/jobs/get_ordered_jobs', 
                    method: "GET",
                    params: {count: 9}
    });
	kon.success(function(data, status, headers, config) {
		$scope.oglasi=data;
		console.log("Podaci:"+data);
	});
	
}]);