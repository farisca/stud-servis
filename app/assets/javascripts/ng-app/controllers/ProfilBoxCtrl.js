// Kontroler za prikaz profila o kompaniji/studentu
angular.module('aplikacija').controller("profilBoxCtrl", ['$scope', '$http', '$window', '$location', 'AuthToken', '$route', function($scope, $http, $window, $location, AuthToken, $route) {
    $scope.data = {};
    $scope.download = false;
    $scope.savebutton = {};
    $scope.savebutton.disabled = false;
    $scope.infoMsg = "";
    $scope.data.location = 2;
    var role = -1;
    
    // Pokupi podatke o studentu
    $scope.getStudentsData = function() {
        console.log("kupim podatke o studentu");
        $http.get('/students/get_student_by_id?id=' + student_id).success(function(data, status, headers, config) {
             $scope.data.name = data.name;
             console.log("Primljeno ime: " + data.name);
             console.log("Ubaceno ime: " + $scope.data.name);
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
    };

    // Pokupi podatke o kompaniji
    $scope.getCompanysData = function() {
        console.log("kupim podatke o kompaniji");
        $http.get('/companies/find_company').success(function(data, status, headers, config) {
             $scope.data.name = data.name;
             $scope.data.location = data.location_id;
             $scope.data.description = data.description;
             $scope.data.web = data.web;
             $scope.data.phone = data.phone;
        });
    };

    // Kompanija i student bi trebale imati razlicit prikaz profila
    $scope.isVisibleByRole = function(rola) {
        if (role == 0 && rola == "student") return true;
        else if (role != 0 && rola == "company") return true;
        if (role == -1) return false;
    }
       
    // Download CV-ja za studenta
    $scope.downloadCV = function() {
        alert("Kliknuo");
        $http.get('/students/download_cv?id=' + $scope.data.cv).success(function(data, status, headers, config) {});
    };

    $scope.isInfo = function() {
        return (!($scope.infoMsg === ""));
    }

    // Saznaj da li je kompanija ili student
    var url = $location.path().replace("/viewprofile/","");
    
    // U ovisnosti sta je, pozovi odgovarajuce metode
    if (url.contains("company")) {
    	role = 1;
    	company_id = url.replace("company=", "");
    	console.log(company_id);
    } else if(url.contains("student")) {
    	role = 0;
    	student_id = url.replace("student=", "");
    	console.log(student_id);
    	$scope.getStudentsData();
    }
    

}]);


