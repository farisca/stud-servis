
angular.module('aplikacija')
    .controller("passwordController", ['$http', '$window', '$location', function($http, $window, $location) {
		this.podaci={};
    this.errorMsg="";
    this.successMsg="";
    
    this.isError=function() {
        return (!(this.errorMsg===""));
      }
      this.isSuccess=function() {
        return (!(this.successMsg===""));
      }

    this.promjeni = function() {
      this.errorMsg="";
      if (this.podaci.novi_password.length < 5) this.errorMsg = "Password mora biti barem 5 karaktera dug!";
      else if (this.podaci.novi_password != this.podaci.password_confirmation) this.errorMsg ="Password i potvrda passworda se razlikuju!";
      else
        $http.post('/users/password_change', this.podaci).
          success(function(data, status, headers, config) {
            if(data.error == "OK") {
              //$window.location.reload();
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

