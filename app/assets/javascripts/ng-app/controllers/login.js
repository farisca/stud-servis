
angular.module('aplikacija')
    .controller("loginController", function() {
		this.podaci={};

		this.logiraj = function(glavni) {
			alert(this.podaci.password);
			glavni.setPrijavljen(this.podaci.email);

		}

		this.podaci={};

	});

