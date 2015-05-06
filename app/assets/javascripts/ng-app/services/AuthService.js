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
        $http.get('/users/get_role').success(function(data, status, headers, config) {
          AuthToken.setTipKorisnika(data.rola);
        });
        
        //prikaz razlicitog home pagea u zavisnoti od role
        if(AuthToken.tipKorisnika()==0)
          $location.path('/home');
        else
          $location.path('/home'); //treba izmjeniti u home page
          
        d.resolve(resp.user);
      }).error(function(resp) {
        $scope.errorMsg ="Netačni podaci!";
        $scope.podaci.password = "";
        d.reject(resp.error);
      });
      return d.promise;
    }
  };
});