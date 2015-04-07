
var app=angular.module('aplikacija');

app.controller('LocationController', ['$http', function ($http) {
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
    	
    	this.getAllLocations= function() {
    		this.errorMsg="";
    		
    		if (!(this.isError())) {
    		
    			res = $http.get('getAllLocations', this.podaci);
    			
				res.success(function(data, status, headers, config) {
					if (data=="OK") this.successMsg = data;
					else this.errorMsg=data;
				});
    		}
    	}
    	
        
    }]);