

angular.module('aplikacija')
    .controller("glavniController", ['$http', '$location', '$window', function($http, $location, $window) {
		this.trenutnaStranica="home";
		this.prijavljen={};

		this.isTrenutna = function(stranica) {
			return (stranica===this.trenutnaStranica);
		}

		this.setTrenutna = function(stranica) {
			this.trenutnaStranica=stranica;
		}

		this.isPrijavljen = function() {
			obj = this.prijavljen;
   			for(var prop in obj) {
       			 if(obj.hasOwnProperty(prop))
           		 return true;
   			 }

   			 return false;
		}

		this.setPrijavljen = function(naziv) {
			this.prijavljen.ime=naziv;
		}

		this.logout = function() {
			
			$http.get("/sessions/delete_session");
			//alert("logoutam");
			$window.location.reload();
    				$location.path('login');
		}

		this.prijava = function() {
			//alert("logiram se");
			$location.path('/login');
		}


	}]);