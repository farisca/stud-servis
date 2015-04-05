angular.module('aplikacija')
    .controller('login', function ($scope) {
        $scope.things = ['Angular', 'Rails 4.1', 'Working', 'Together!!'];
    });

angular.module('aplikacija')
    .controller("loginController", function() {
		this.podaci={};

		this.logiraj = function(glavni) {
			alert(this.podaci.password);
			glavni.setPrijavljen(this.podaci.email);

		}

		this.podaci={};

	});

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
