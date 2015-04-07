angular.module('aplikacija')
    .controller('registerController', ['$http', '$location', '$window', function ($http, $location, $window) {
    	this.podaci={};
    	this.errorMsg="";
    	this.successMsg="";

    	this.isError=function() {
    		return (!(this.errorMsg===""));
    	}
    	this.isSuccess=function() {
    		return (!(this.successMsg===""));
    	}
    	this.posalji= function() {
    		this.errorMsg="";
    		if (this.podaci.password.length < 5) this.errorMsg = "Password mora biti barem 5 karaktera dug!"
    		else if (this.podaci.password != this.podaci.password_confirmation) this.errorMsg ="Password i potvrda passworda se razlikuju!";
    		
    		if (!(this.isError())) {
    			res = $http.post('/students/add_student', this.podaci);

				res.success(function(data, status, headers, config) {
					if (data.error=="OK") {
                        this.successMsg = data;
                        $location.path('potvrdaORegistraciji');
                    }
					else this.errorMsg=data;
				});
    		}
    	}
        
    }]);
