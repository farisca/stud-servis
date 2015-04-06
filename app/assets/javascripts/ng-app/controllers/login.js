
angular.module('aplikacija')
    .controller("loginController", ['$http', '$window', '$location', function($http, $window, $location) {
		this.podaci={};

		this.logiraj = function() {
			alert(this.podaci.password);
			$http.post('/sessions/add_session', this.podaci).
  			success(function(data, status, headers, config) {
    			if(data.error == "OK") {
    				$location.path('oglasi');
    				$window.location.reload();
    				
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

