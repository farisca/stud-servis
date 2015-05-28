var app=angular.module('aplikacija');

app.controller('HomeController', ['$http','$scope','$location', function ($http, $scope,$location ) {
	$scope.oglasi=[];

    $http({ url: '/jobs/get_ordered_jobs', method: "GET", params: {count: 9}}).success(function(data, status, headers, config) {
        brojOglasa = data.number;

        for (i=0; i<brojOglasa; i++) {
            var oglas = data.jobs[i]; 
            $scope.oglasi.push(oglas);
        }
        console.log(brojOglasa);
	});

    $scope.search = function() {        
        $http.get('/jobs/get_jobs_search?word=' + $scope.word.toLowerCase()).success(function(data, status, headers, config) {
            $scope.oglasi = [];
            
            for (i = 0; i < data.number; i++) {
                $scope.oglasi.push(data.jobs[i]);
                console.log(data.jobs[i].name);
            }
        });
    }
}]);



	
