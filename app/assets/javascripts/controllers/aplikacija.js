	app.controller("glavniController", function() {
		this.trenutnaStranica="home";

		this.isTrenutna = function(stranica) {
			return (stranica===this.trenutnaStranica);
		}

		this.setTrenutna = function(stranica) {
			this.trenutnaStranica=stranica;
		}


	});
