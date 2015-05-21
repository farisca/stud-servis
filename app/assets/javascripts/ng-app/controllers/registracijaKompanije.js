angular.module('aplikacija')
    .controller('registerCompanyController', ['$http', '$location', '$scope',  function ($http, $location, $scope) {
    	$scope.podaci={};
    	$scope.errorMsg="";
    	$scope.infoMsg="";
        $scope.savebutton = {};
        $scope.savebutton.disabled = false;

    	$scope.isError=function() {
    		return (!($scope.errorMsg===""));
    	}
    	$scope.isSuccess=function() {
    		return (!($scope.successMsg===""));
    	}
    	$scope.posalji= function() {
            $scope.savebutton.disabled = true;
            $scope.infoMsg = "Spašavam podatke...";
    		$scope.errorMsg="";
    		if ($scope.podaci.password.length < 5) $scope.errorMsg = "Password mora biti barem 5 karaktera dug!"
    		else if ($scope.podaci.password != $scope.podaci.password_confirmation) $scope.errorMsg ="Password i potvrda passworda se razlikuju!";
            else if (grecaptcha.getResponse() == "") $scope.errorMsg = "Morate potvrditi da niste robot!";
    		
    		if (!($scope.isError())) {
    			res = $http.post('/companies/add_company', $scope.podaci);
				res.success(function(data, status, headers, config) {
					if (status==200) {
                        if(data.status == "user_exists") {
                            $scope.errorMsg = "Korisnik postoji";
                            $scope.savebutton.disabled = false;
                            $scope.infoMsg = "";
                        } else if (data.status == "error") {
                            $scope.savebutton.disabled = false;
                            $scope.infoMsg = "";
                            $scope.errorMsg = "Greska";
                        } else {
                            $location.path('/potvrdaORegistraciji')
                        }
                    }
				});
    		}
    	}
        
    }]);