
var app=angular.module('aplikacija');

app.controller('CategoryController', ['$http','$scope', function ($http,$scope) {
    	
       $http.get('categories/getAllCategories').success(function(data, status, headers, config) {
					this.successMsg="Success while geting all categories!";
					$scope.podaci=data;
				
				}).error(function(){
					this.errorMsg="Error while geting all categories!";
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