

angular.module('aplikacija')
    .controller("glavniController", ['$http', '$location', '$window', 'AuthToken', function($http, $location, $window, AuthToken) {
		this.trenutnaStranica="home";
		this.prijavljen={};

		console.log("token" + AuthToken.get());

		this.isTrenutna = function(stranica) {
			return (stranica===this.trenutnaStranica);
		}

		this.isVidljiv = function(stranica) {
			if((stranica == "prijava" || stranica == "registracijaStudenta" || stranica == "registracijaKompanije") && AuthToken.get() == "") return true;
			if((stranica == "odjava") && AuthToken.get() != "") return true;
			return false;
			
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
			AuthToken.set("", "");
			console.log("token" + AuthToken.get());
			//$http.get("/sessions/delete_session");
			//alert("logoutam");
//			$window.location.reload();
  //  				$location.path('login');
		}

		this.prijava = function() {
			//alert("logiram se");
			$location.path('/login');
		}




	}]);