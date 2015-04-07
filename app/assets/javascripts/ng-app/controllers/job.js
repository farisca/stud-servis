
var app=angular.module('aplikacija');

app.controller('JobsController', ['$http', function ($http) {
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
    	
    	this.getAllJobs= function() {
    		this.errorMsg="";
    		
    		if (!(this.isError())) {
    		
    			res = $http.get('/jobs/getAllJobs', this.podaci);
    			
				res.success(function(data, status, headers, config) {
					if (data=="OK") this.successMsg = data;
					else this.errorMsg=data;
				});
    		}
    	}
    	
    	this.createNewJob= function() {
    		this.errorMsg="";
    		
    		if (!(this.isError())) {
    			res = $http.post('/jobs/add_job', this.podaci);
				res.success(function(data, status, headers, config) {
					if (data=="OK") this.successMsg = data;
					else this.errorMsg=data;
				});
    		}
    	}
        
        
    }]);