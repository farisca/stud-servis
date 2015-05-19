app.controller("glavniController", ['$http', '$location', '$window', 'AuthToken','$scope', '$translate', function($http, $location, $window, AuthToken, $scope, $translate) {
		this.trenutnaStranica="home";
		this.prijavljen={};
        var obj;

        if(AuthToken.get() != "" && AuthToken.tipKorisnika() == 1) {
			$http.get('/notifications/get_new_notifications').success(function(data, status, headers, config) {
	        	$scope.new_notifications = " (" + data.new + ")";
	        });
		}
        
		this.isTrenutna = function(stranica) {
			return (stranica===this.trenutnaStranica);
		}

		this.isCurrentLanguage = function(lng) {
			
		    if ($translate.use() === lng) {
		    	console.log($translate.use());
		      return 1;
		    } else {
		      return 0;
		    }
		}

		this.isVidljiv = function(stranica) {
			console.log("Tip korisnika: " + AuthToken.tipKorisnika());
			if(stranica == "prijava" && AuthToken.get() == "") return true;
			if(stranica == "registracijaStudenta" && AuthToken.get() == "") return true;
			if(stranica == "registracijaKompanije" && AuthToken.get() == "") return true;
			
			//Za sve logirane usere
			if(stranica == "odjava" && AuthToken.get() != "") return true;
			if(stranica == "pocetna" && AuthToken.get() != "" && AuthToken.tipKorisnika() != 2) return true;
			if(stranica == "promjenaSifre" && AuthToken.get() != "") return true;
			if(stranica == "potvrdaORegistraciji" && AuthToken.get() != "") return true;
			if(stranica == "change_locale" && AuthToken.get() != "") return true;
			if(stranica == "profil" && AuthToken.get() != ""  && AuthToken.tipKorisnika() != 2) return true;
			
			//Za sve logirane studente
			if(stranica == "oglasi" && AuthToken.get() != "" && AuthToken.tipKorisnika()==0 ) return true;
			if(stranica == "oglas" && AuthToken.get() != "" && AuthToken.tipKorisnika()==0 ) return true;
			if(stranica == "kategorije" && AuthToken.get() != "" && AuthToken.tipKorisnika()==0 ) return true; //prikaz kategorija za pretragu
			if(stranica == "home" && AuthToken.get() != "" && AuthToken.tipKorisnika()==0) return true;
			
			//Za logirane kompanije
			if(stranica == "unosOglasa" && AuthToken.get() != "" && AuthToken.tipKorisnika()==1) return true;
			if(stranica == "notifikacije" && AuthToken.get() != "" && AuthToken.tipKorisnika()==1) return true;
			if(stranica == "kompanija" && AuthToken.get() != "" && AuthToken.tipKorisnika()==1) return true;
			if(stranica == "potvrdaOUnesenomOglasu" && AuthToken.get() != "" && AuthToken.tipKorisnika()==1) return true;

			//Za admina
			if(stranica == "admin" && AuthToken.get() != "" && AuthToken.tipKorisnika()==2) return true;

			return false;
			
		}

		this.setTrenutna = function(stranica) {
			this.trenutnaStranica=stranica;
			if(AuthToken.get() != "" && AuthToken.tipKorisnika() == 1) {
				$http.get('/notifications/get_new_notifications').success(function(data, status, headers, config) {
		        	$scope.new_notifications = " (" + data.new + ")";
		        });
			}
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