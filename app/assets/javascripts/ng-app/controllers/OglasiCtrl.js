
angular.module('aplikacija')
    .controller("OglasiCtrl", ['$http', '$window', '$location', 'AuthToken', function($http, $window, $location, AuthToken) {
	
	this.podaci={};
    console.log("token: " + AuthToken.get());
    $http.get('/jobs/1.json').success(function(data, status, headers, config) {
         console.log(data);
        });
		this.logiraj = function() {
			console.log(this.podaci.password);
			
		}

		this.podaci={};

	}]);



