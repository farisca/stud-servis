angular.module('aplikacija')
    .controller('registerCompanyController', ['$http', '$location', function ($http, $location) {
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
    			res = $http.post('/companies/add_company', this.podaci);
				res.success(function(data, status, headers, config) {
					if (status==200) $location.path('/potvrdaORegistraciji')
					else this.errorMsg=data;
				});
    		}
    	}
        
    }]);