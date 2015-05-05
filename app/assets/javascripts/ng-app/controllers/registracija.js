angular.module('aplikacija')
    .controller('registerController', ['$scope', '$http', '$location', '$window', function ($scope, $http, $location, $window) {
    	this.podaci={};
    	$scope.errorMsg="";
    	$scope.infoMsg="";
        var res;
        $scope.savebutton = {};

        
        
    	$scope.isError=function() {
    		return (!($scope.errorMsg===""));
    	}
    	$scope.isInfo=function() {
    		return (!($scope.infoMsg===""));
    	}
    	this.posalji= function() {
    		$scope.errorMsg="";

    		if (this.podaci.password.length < 5) $scope.errorMsg = "Password mora biti barem 5 karaktera dug!"
    		else if (this.podaci.password != this.podaci.password_confirmation) $scope.errorMsg ="Password i potvrda passworda se razlikuju!";
            else if (grecaptcha.getResponse() == "") $scope.errorMsg = "Morate potvrditi da niste robot!";

    		if (!($scope.isError())) {
                $scope.savebutton.disabled = true;
                $scope.infoMsg = "Spašavam podatke...";
    			res = $http.post('/students/add_student', this.podaci);

				res.success(function(data, status, headers, config) {
					if (data.error!="Korisnik već postoji") {
                        $location.path('potvrdaORegistraciji');
                    }
                    else if(data.error=="Korisnik već postoji")
                        $scope.errorMsg = "Korisnik već postoji!";
                    
					else $scope.errorMsg=data.error;
				});
    		}
    	}
        
    }]);
