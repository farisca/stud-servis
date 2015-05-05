
angular.module('aplikacija').controller("profilCtrl", ['$scope', '$http', '$window', '$location', 'AuthToken', function($scope, $http, $window, $location, AuthToken) {
    $scope.data = {};
    $scope.download = false;
    $scope.savebutton = {};
    $scope.savebutton.disabled = false;
    $scope.infoMsg = "";
    $scope.data.location = 2;

    $http.get('/students/find_student').success(function(data, status, headers, config) {
    	 $scope.data.name = data.name;
         $scope.data.surname = data.surname;
         
         $scope.data.location = data.location_id;

         $scope.data.university = data.university;
         $scope.data.faculty = data.faculty;
         $scope.data.cv = data.id;
         $http.get('/students/cv_exists?id=' + $scope.data.cv ).success(function(data, status, headers, config) {
            if (data.exists)
                $scope.download = true;
            else
                $scope.download = false;});
    });

    $scope.filesChanged = function(elm) {
        $scope.files = elm.files;
        $scope.$apply();
    }

    $scope.locationSelected = function(id) {
        if (id == $scope.data.location) return true;
        else return false;
    }

    $scope.save = function() {        
        $scope.savebutton.disabled = true;
        $scope.infoMsg = "Spašavam podatke...";
        var fd = new FormData();
        var imaFajl = false;
        angular.forEach($scope.files, function(file) {
            fd.append('name', $scope.data.name),
            fd.append('surname', $scope.data.surname),
            fd.append('location', $scope.data.location),
            fd.append('university', $scope.data.university),
            fd.append('faculty', $scope.data.faculty),
            fd.append('file', file),
            imaFajl = true;
        });
        if(imaFajl) {
            $http.post('/students/update', fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            }).success(function(resp) {
                $scope.savebutton.disabled = false;
                $scope.infoMsg = "Podaci spašeni!";
                console.log("Data saved...");

            }).error(function(resp) {
                console.log("greska");
            });
        } else {
            $http.post('/students/update', {
                name: $scope.data.name,
                surname: $scope.data.surname,
                location: $scope.data.location,
                university: $scope.data.university,
                faculty: $scope.data.faculty
            }).success(function(resp) {
                $scope.savebutton.disabled = false;
                $scope.infoMsg = "Podaci spašeni!";
                console.log("Data saved...");

            }).error(function(resp) {
                console.log("greska");
            });
        }
        
    };
       
    $scope.downloadCV = function() {
        alert("Kliknuo");
        $http.get('/students/download_cv?id=' + $scope.data.cv).success(function(data, status, headers, config) {});
    };

    $scope.isInfo = function() {
        return (!($scope.infoMsg === ""));
    }

}]);



