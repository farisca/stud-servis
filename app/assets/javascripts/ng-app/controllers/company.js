
var app=angular.module('aplikacija');

app.controller('CompanyController', ['$http','$scope', function ($http,$scope) {
    	
       $http.get('companies/getAllCompanies').success(function(data, status, headers, config) {
					this.successMsg="Success while geting all companies!";
					console.log(this.successMsg);
					$scope.podaci=data;
				
				}).error(function(){
					this.errorMsg="Error while geting all companies!";
					console.log(this.errorMsg);
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