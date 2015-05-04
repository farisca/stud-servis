angular.module('aplikacija')
    .controller("glavniController", ['$http', '$location', '$window', 'AuthToken','$scope', function($http, $location, $window, AuthToken, $scope) {
		this.trenutnaStranica="home";
		this.prijavljen={};
        var obj;
		console.log("token" + AuthToken.get());
		
		 $http.get('/users/find_user_role').success(function(data, status, headers, config) {

    	 $scope.data.role = data.role;
    	 console.log($scope.data.role);

         });

		this.isTrenutna = function(stranica) {
			return (stranica===this.trenutnaStranica);
		}

		this.isVidljiv = function(stranica) {
			//console.log("mijenjam vidljivost" + stranica);
			if(stranica == "prijava" && AuthToken.get() == "") return true;
			if(stranica == "registracijaStudenta" && AuthToken.get() == "") return true;
			if(stranica == "registracijaKompanije" && AuthToken.get() == "") return true;
			
			//Za sve logirane usere
			if(stranica == "odjava" && AuthToken.get() != "") return true;
			if(stranica == "profil" && AuthToken.get() != "") return true;
			
			//Za sve logirane studente
			if(stranica == "oglasi" && AuthToken.get() != "" ) return true;
			if(stranica == "oglas" && AuthToken.get() != "") return true;
			
			//Za logirane kompanije
			if(stranica == "unosOglasa" && AuthToken.get() != "") return true;
			if(stranica == "kompanija" && AuthToken.get() != "") return true;
			if(stranica == "pocetna" && AuthToken.get() != "") return true;
			if(stranica == "promjenaSifre" && AuthToken.get() != "") return true;
			if(stranica == "listaOglasa" && AuthToken.get() != "") return true;
			if(stranica == "potvrdaOUnesenomOglasu" && AuthToken.get() != "") return true;
			if(stranica == "potvrdaORegistraciji" && AuthToken.get() != "") return true;
			if(stranica == "change_locale" && AuthToken.get() != "") return true;
			if(stranica == "home" && AuthToken.get() != "") return true;

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