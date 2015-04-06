// servis kojim se korisnicki podaci salju na server s ciljem logiranja
angular.module('aplikacija').factory("AuthService", function($http, $q, $rootScope, AuthToken) {
  return {
    login: function(username, password) {
      var d = $q.defer();
      $http.post('/auth', {
        username: username,
        password: password
      }).success(function(resp) {
        AuthToken.set(resp.auth_token, resp.type);
        console.log("Uspjesno logiran. Dobiven token: " + resp.auth_token);
        d.resolve(resp.user);
      }).error(function(resp) {
        console.log("Pogresni podaci");
        d.reject(resp.error);
      });
      return d.promise;
    }
  };
});