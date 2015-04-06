

angular.module('aplikacija')
    .controller("loginController", ['$http', '$window', '$location', 'AuthToken', 'AuthService', function($http, $window, $location, AuthToken, AuthService) {
			this.podaci={};
      
		  this.logiraj = function() {
			console.log("Pozivam servis za logiranje...");
      console.log("Trenutni token: " + AuthToken.get());
			AuthService.login(this.podaci.email, this.podaci.password);
      console.log("Servis za logiranje vratio...");
   //    $http.post('/sessions/add_session', this.podaci).
  	// 		success(function(data, status, headers, config) {
   //  			if(data.error == "OK") {

   //  				$window.location.reload();
   //  				$location.path('oglasi');
   //  			}
   //  			else {
   //  				alert(data.error);
   //  			}
  	// 		}).
  	// 		error(function(data, status, headers, config) {
				
			// });
		}

		this.podaci={};

	}]);

