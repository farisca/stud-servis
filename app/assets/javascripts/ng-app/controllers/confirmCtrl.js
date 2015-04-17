

angular.module('aplikacija')
    .controller("confirmCtrl", ['$http', '$window', '$location', 'AuthToken', 'AuthService', function($http, $window, $location, AuthToken, AuthService) {
      console.log("dodao kontroler");
			this.podaci={};
      this.errorMsg="";
      this.isError=function() {
        console.log("provjeravam da li ima poruka " + this.errorMsg);
        return (!(this.errorMsg===""));
      }
      this.isSuccess=function() {
        return (!(this.successMsg===""));
      }

		  this.logiraj = function() {

        this.errorMsg="";
        if (this.podaci.password.length < 5) this.errorMsg = "Password mora biti barem 5 karaktera dug!";
        else {
          console.log("Pozivam servis za logiranje...");
          console.log("Trenutni token: " + AuthToken.get());
          AuthToken.set(getToken("tk"));
          console.log(AuthService.confirm());
          console.log("Servis za logiranje vratio...");
      
        }
			
 
		}

		this.podaci={};
    
	}]);

    function getToken(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}

