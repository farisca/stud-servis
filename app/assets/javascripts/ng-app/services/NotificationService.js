// servis kojim se kreira nova notifikacija
angular.module('aplikacija').factory("NotificationService", function($http, $q, $rootScope, $location) {
  return {
    new_notification: function(text, user) {
      var d = $q.defer();
      $http.post('/notifications/new_notification', {
        text: text,
        user: user
      }).success(function(resp) {
          
        d.resolve(resp.user);
      }).error(function(resp) {
        d.reject(resp.error);
      });
      return d.promise;
    }
  };
});