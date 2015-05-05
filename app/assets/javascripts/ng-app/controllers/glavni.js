app.controller("glavniController", ['$http', '$location', '$window', 'AuthToken','$scope', '$translate', function($http, $location, $window, AuthToken, $scope, $translate) {
		this.trenutnaStranica="home";
		this.prijavljen={};
        var obj;
        
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
			if(stranica == "pocetna" && AuthToken.get() != "") return true;
			if(stranica == "promjenaSifre" && AuthToken.get() != "") return true;
			if(stranica == "potvrdaORegistraciji" && AuthToken.get() != "") return true;
			if(stranica == "change_locale" && AuthToken.get() != "") return true;
			
			//Za sve logirane studente
			if(stranica == "oglasi" && AuthToken.get() != "" && AuthToken.tipKorisnika()==0 ) return true;
			if(stranica == "oglas" && AuthToken.get() != "" && AuthToken.tipKorisnika()==0 ) return true;
			if(stranica == "kategorije" && AuthToken.get() != "" && AuthToken.tipKorisnika()==0 ) return true; //prikaz kategorija za pretragu
			if(stranica == "profil" && AuthToken.get() != "" && AuthToken.tipKorisnika()==0) return true;
			if(stranica == "home" && AuthToken.get() != "" && AuthToken.tipKorisnika()==0) return true;
			
			//Za logirane kompanije
			if(stranica == "unosOglasa" && AuthToken.get() != "" && AuthToken.tipKorisnika()==1) return true;
			if(stranica == "kompanija" && AuthToken.get() != "" && AuthToken.tipKorisnika()==1) return true;
			if(stranica == "potvrdaOUnesenomOglasu" && AuthToken.get() != "" && AuthToken.tipKorisnika()==1) return true;
			
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

		
		this.promijeniJezik = function (langKey) {
		    $translate.use(langKey);
		  };
		




	}]);