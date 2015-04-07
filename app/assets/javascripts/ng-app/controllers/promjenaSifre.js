
angular.module('aplikacija')
    .controller("passwordController", ['$http', '$window', '$location', function($http, $window, $location) {
		this.podaci={};
    //this.podaci.email = login.podaci.email

    this.promjeni = function() {
      $http.post('/users/password_change', this.podaci).
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

		/*this.logiraj = function() {
			
			$http.post('/sessions/add_session', this.podaci).
  			success(function(data, status, headers, config) {
    			if(data.error == "OK") {

    				$window.location.reload();
    				$location.path('login');
    			}
    			else {
    				alert(data.error);
    			}
  			}).
  			error(function(data, status, headers, config) {
				
			});
		}*/

		this.podaci={};

	}]);

