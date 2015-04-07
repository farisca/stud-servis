angular.module('aplikacija')
    .controller('emailController', ['$http', '$location', '$window', function ($http, $location, $window) {
    	
        this.podaci={};
    	this.errorMsg="";
    	this.successMsg="";
        var res;
        
    	this.isError=function() {
    		return (!(this.errorMsg===""));
    	}
    	this.isSuccess=function() {
    		return (!(this.successMsg===""));
    	}
    	this.posalji= function() {
    		this.errorMsg="";

    		    		
    		if (!(this.isError())) {
    			res = $http.post('/users/check_user', this.podaci);

				res.success(function(data, status, headers, config) {
					if (data.error=="OK") {
                        this.successMsg = data;
                        $window.location.reload();
                        $location.path('potvrdaORegistraciji');
                    }
					else this.errorMsg=data;
				});
    		}
    	}
        
    }]);