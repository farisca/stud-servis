var app=angular.module('aplikacija');

app.controller('HomeController', ['$http','$scope','$location', function ($http, $scope,$location ) {
	$scope.oglasi=[];

	var kon;

	kon = $http({ url: '/jobs/get_ordered_jobs', 
        method: "GET",
        params: {count: 9}
    });
    
    kon.success(function(data, status, headers, config) {
        brojOglasa = data.number;

        for (i=0; i<brojOglasa; i++) {
            var oglas = data.jobs[i]; 
            $scope.oglasi.push(oglas);
        }
        console.log(brojOglasa);
	});
}]);



	
