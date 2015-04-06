
angular.module('aplikacija')
    .controller("OglasiCtrl", ['$http', '$window', '$location', function($http, $window, $location) {
		this.podaci={};

		this.logiraj = function() {
			alert(this.podaci.password);
			$http.post('/sessions/add_session', this.podaci).
  			success(function(data, status, headers, config) {
    			if(data.error == "OK") {
    				
    				$window.location.reload();
    				$location.path('oglasi');
    			}
    			else {
    				alert(data.error);
    			}
  			}).
  			error(function(data, status, headers, config) {
				
			});
		}

		this.podaci={};

	}]);

