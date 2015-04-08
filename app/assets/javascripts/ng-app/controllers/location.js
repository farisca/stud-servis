
var app=angular.module('aplikacija');

app.controller('LocationController', ['$http','$scope', function ($http,$scope) {
    	
       $http.get('locations/getAllLocations').success(function(data, status, headers, config) {
					this.successMsg="Success while geting all locations!";
					$scope.podaci=data;
				
				}).error(function(){
					this.errorMsg="Error while geting all locations!";
				});
    		
    	this.errorMsg="";
    	this.successMsg="";
	    
    	this.isError=function() {
    		return (!(this.errorMsg===""));
    	}
    	this.isSuccess=function() {
    		return (!(this.successMsg===""));
    	}
        
    }]);