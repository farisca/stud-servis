app.controller("AdminLocationsCtrl", ['$scope', '$http', '$window', '$location', 'AuthToken', '$translate', function($scope, $http, $window, $location, AuthToken, $translate) {
    
        $scope.data={};
	    var res;
	    
	    this.isError=function() {
        console.log("provjeravam da li ima poruka " + $scope.errorMsg);
        return (!($scope.errorMsg===""));
      }
      this.isSuccess=function() {
        return (!($scope.successMsg===""));
      }
      
    	this.createNewLoc= function() {		
		
		 res= $http.post('locations/add_location',this.data);
		
		 res.success(function(data, status, headers, config) {
        	       if (data.error=="OK") {
					$scope.successMsg="Success while saving a new location!"
					this.successMsg=$scope.successMsg
					console.log($scope.successMsg);
					$location.path('/admin/locations')
        	       }
        	       else{
        	        $scope.errorMsg=data.error
        	        this.errorMsg=$scope.errorMsg
					console.log( $scope.errorMsg);  
        	       }
				
				}).error(function(){
					$scope.errorMsg="Error while saving a new location!"
					console.log(this.errorMsg);
				});
		}
}]);



