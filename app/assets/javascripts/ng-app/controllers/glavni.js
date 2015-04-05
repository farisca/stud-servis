

angular.module('aplikacija')
    .controller("glavniController", function() {
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


	});