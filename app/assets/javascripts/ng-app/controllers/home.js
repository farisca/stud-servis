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
	$scope.oglasi.push(oglas1);
	$scope.oglasi.push(oglas2);
	$scope.oglasi.push(oglas3);


	/*kon = $http.get({url: '/jobs/get_ordered_jobs', 
                    method: "GET"
                    //params: {count: 9}
    });
	kon.success(function(data, status, headers, config) {
		alert(JSON.stringify(data.students));
		$scope.oglasi=data.jobs;
		console.log("Podaci:"+data);
	});*/

	var kon;

	kon = $http({ url: '/jobs/get_ordered_jobs', 
        method: "GET",
    });
    
    kon.success(function(data, status, headers, config) {
        brojOglasa = data.number;
        var svi_oglasi = [];

        for (i=0; i<brojOglasa; i++) {
        	//ovdje moze i sve ostale kolone koje hoces iz jobova, jer su dosle u json-u
            var oglas = data.jobs[i].id; 
            svi_oglasi.push(oglas);
        }
        console.log(svi_oglasi);
	});
}]);


	/*var init = function () {
           
            
        };
        
        init();*/

	
