// servis kojim se korisnicki podaci salju na server s ciljem logiranja
angular.module('aplikacija').factory("AuthService", function($http, $q, $rootScope, AuthToken, $location) {
  return {
    login: function(username, password, $scope) {
      var d = $q.defer();
      $http.post('/auth', {
        username: username,
        password: password
      }).success(function(resp) {
        
        AuthToken.set(resp.auth_token, resp.type);
        console.log("Uspjesno logiran."+resp.type+" Dobiven token: " + resp.auth_token);
        //odmah rolu spasi za logovanog usera u AuthToken

        //nakaci token
        var config = {headers:  {'Authorization': 'Bearer ' + resp.auth_token} };

        $http.get('/users/get_role', config).success(function(data, status, headers, config) {
          console.log("Tip korisnika prvi put: " + data.rola);
          AuthToken.setTipKorisnika(data.rola);
           //prikaz razlicitog home pagea u zavisnoti od role
          if(AuthToken.tipKorisnika()==0) {
            $location.path('/home');
            console.log('student');
          } else if (AuthToken.tipKorisnika()==2) { 
            $location.path('/admin'); //treba izmjeniti u home page
            console.log('administrator');
          } else {
            $location.path('/home');
            console.log('kompanija');
          }
        });
        d.resolve(resp.user);
      }).error(function(resp) {
        if (resp.error == "banned")
          $scope.errorMsg ="Vi ste banovani!";
        else
          $scope.errorMsg ="Netačni podaci!";
        $scope.podaci.password = "";
        d.reject(resp.error);
      });
      return d.promise;
    }
  };
});