

angular.module('aplikacija')
    .controller("glavniController", ['$http', '$location', '$window', 'AuthToken', function($http, $location, $window, AuthToken) {
		this.trenutnaStranica="home";
		this.prijavljen={};

		console.log("token" + AuthToken.get());

		this.isTrenutna = function(stranica) {
			return (stranica===this.trenutnaStranica);
		}

		this.isVidljiv = function(stranica) {
			//console.log("mijenjam vidljivost" + stranica);
			if(stranica == "prijava" && AuthToken.get() == "") return true;
			if(stranica == "registracijaStudenta" && AuthToken.get() == "") return true;
			if(stranica == "registracijaKompanije" && AuthToken.get() == "") return true;
			if(stranica == "odjava" && AuthToken.get() != "") return true;
			if(stranica == "oglasi" && AuthToken.get() != "") return true;
			if(stranica == "kompanija" && AuthToken.get() != "") return true;
			if(stranica == "pocetna" && AuthToken.get() != "") return true;
			if(stranica == "promjenaSifre" && AuthToken.get() != "") return true;
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