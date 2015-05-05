angular.module('aplikacija').controller("confirmCtrl", ['$scope', '$http', '$window', '$location', 'AuthToken', 'AuthService', function($scope, $http, $window, $location, AuthToken, AuthService) {
  // Prikazi poruku da potvrdjuje account
  $scope.message = {};
  $scope.message.confirming = true;
  $scope.message.error = false;
  $scope.message.ok = false;

  // Postavi token
  AuthToken.set(getTokenFromUrl("tk"));

  // Potvrdi korisnika
  $http.get('/auth').success(function(data, status, headers, config) {
    $scope.message.confirming = false;
    console.log(data.status.id);
    if(data.status.id != null)
      $scope.message.ok = true;
    else
      $scope.message.error = true;
  });


}]);

// Funkcija za iscitavanje tokena iz url-a
function getTokenFromUrl(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}

