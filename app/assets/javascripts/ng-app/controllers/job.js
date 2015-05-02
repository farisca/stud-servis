
var app=angular.module('aplikacija');

app.controller('JobsController', ['$http','$scope','$location', function ($http, $scope,$location ) {
    	$scope.podaci={};
    	this.errorMsg="";
    	this.successMsg="";
	    var res;
	    
    	this.isError=function() {
    		return (!(this.errorMsg===""));
    	}
    	this.isSuccess=function() {
    		return (!(this.successMsg===""));
    	}
    	
    	
    	$http.get('jobs/getAllJobs').success(function(data, status, headers, config) {
					this.successMsg="Success while geting all jobs!";
					$scope.podaci=data;
				
				}).error(function(){
					this.errorMsg="Error while geting all jobs!";
				});
		
		this.createNewJob= function() {		
		console.log(this.podaci);
		
        res= $http.post('/jobs/add_job',this.podaci);
        
        res.success(function(data, status, headers, config) {
        	       if (data.error=="OK") {
					this.successMsg="Success while saving a new job!";
					console.log(this.successMsg);
					$location.path('potvrdaOUnesenomOglasu');
				//	$scope.podaci=data;
        	       }
				
				}).error(function(){
					
					this.errorMsg="Error while saving a new job!";
					console.log(this.errorMsg);
				});
				
		}
    	
        
    }]);