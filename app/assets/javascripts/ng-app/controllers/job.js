
var app=angular.module('aplikacija');

app.controller('JobsController', ['$http','$scope','$location', function ($http, $scope,$location ) {
    	$scope.data={};
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
					$scope.successMsg="Success while geting all jobs!";
					$scope.data=data;
				
				}).error(function(){
					$scope.errorMsg="Error while geting all jobs!";
				});
		
		this.createNewJob= function() {		
		
		
        res= $http.post('/jobs/add_job',this.data);
        
        res.success(function(data, status, headers, config) {
        	       if (data.error=="OK") {
					$scope.successMsg="Success while saving a new job!";
					console.log(this.successMsg);
				    $location.path('/potvrdaOUnesenomOglasu');
				//	$scope.podaci=data;
        	       }
				
				}).error(function(){
					
					$scope.errorMsg="Error while saving a new job!";
					console.log(this.errorMsg);
				});
				
		}
    	
        
    }]);