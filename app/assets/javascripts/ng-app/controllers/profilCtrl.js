
angular.module('aplikacija').controller("profilCtrl", ['$scope', '$http', '$window', '$location', 'AuthToken', function($scope, $http, $window, $location, AuthToken) {
    $scope.data = {};
    $http.get('/students/find_student').success(function(data, status, headers, config) {
    	 $scope.data.name = data.name;
         $scope.data.surname = data.surname;
         $scope.data.location = data.location;
         $scope.data.university = data.university;
         $scope.data.faculty = data.faculty;
    });

    $scope.filesChanged = function(elm) {
        $scope.files = elm.files;
        $scope.$apply();
    }

    $scope.save = function() {
        var fd = new FormData();
        angular.forEach($scope.files, function(file) {
            fd.append('name', $scope.data.name),
            fd.append('surname', $scope.data.surname),
            fd.append('location', $scope.data.location),
            fd.append('university', $scope.data.university),
            fd.append('faculty', $scope.data.faculty),
            fd.append('file', file)
        });
        $http.post('/au', fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        }).success(function(resp) {
            console.log("ok");
        }).error(function(resp) {
            console.log("greska");
        });
    };
        
}]);


