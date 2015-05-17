app.controller("NotificationsCtrl", ['$scope', '$http', '$window', '$location', 'AuthToken',  function($scope, $http, $window, $location, AuthToken, $translate) {
	$http.get('/notifications/mark_viewed').success(function(data, status, headers, config) {
         console.log(data);
         $scope.getAllMyNotifications();
    });

    $scope.getAllMyNotifications = function() {
        $http.get('/notifications/get_all_notifications').success(function(data, status, headers, config) {
            $scope.notifications = data.notifications;
        });
    }
}]);



