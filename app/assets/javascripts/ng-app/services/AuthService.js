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
        console.log("Uspjesno logiran. Dobiven token: " + resp.auth_token);
        $location.path('/oglasi');
        d.resolve(resp.user);
      }).error(function(resp) {
        console.log($rootScope);
        $scope.errorMsg ="Netačni podaci!";
        d.reject(resp.error);
      });
      return d.promise;
    }
    // confirm: function(tk, $scope) {
    //   var d = $q.defer();
    //   $http.post('/confirm_reg', {
    //     tk: tk
    //   }).success(function(resp) {
    //     AuthToken.set(resp.auth_token, resp.type);
    //     console.log("Uspjesno logiran. Dobiven token: " + resp.auth_token);
    //     $location.path('/oglasi');
    //     d.resolve(resp.user);
    //   }).error(function(resp) {
    //     console.log($rootScope);
    //     $scope.errorMsg ="Netačni podaci!";
    //     d.reject(resp.error);
    //   });
    //   return d.promise;
    // }
  };
});