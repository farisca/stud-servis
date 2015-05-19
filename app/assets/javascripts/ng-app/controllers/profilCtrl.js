angular.module('aplikacija').controller("profilCtrl", ['$scope', '$http', '$window', '$location', 'AuthToken', '$route', function($scope, $http, $window, $location, AuthToken, $route) {
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
        $http.get('/students/find_student').success(function(data, status, headers, config) {
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

    // Saznaj rolu korisnika
    $http.get('/users/get_role').success(function(data, status, headers, config) {
        role = data.rola; 
        // Ako je student, odmah na pocetku pokupi njegove podatke
        if (role == 0) $scope.getStudentsData(); 
        else $scope.getCompanysData(); 
    });

    // Kompanija i student bi trebale imati razlicit prikaz profila
    $scope.isVisibleByRole = function(rola) {
        if (role == 0 && rola == "student") return true;
        else if (role != 0 && rola == "company") return true;
        if (role == -1) return false;
    }

    // Prati promjenu dodanih fajlova
    $scope.filesChanged = function(elm) {
        $scope.files = elm.files;
        $scope.$apply();
    }

    // Selektuj lokaciju na osnovu podataka
    $scope.locationSelected = function(id) {
        if (id == $scope.data.location) return true;
        else return false;
    }

    // Spasi podatke o studentu
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
                $route.reload();
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
                $route.reload();
            }).error(function(resp) {
                console.log("greska");
            });
        }
        
    };

    // Spasi podatke o kompaniji
    $scope.saveCompany = function() {        
        $scope.savebutton.disabled = true;
        $scope.infoMsg = "Spašavam podatke...";
        var fd = new FormData();
        var imaFajl = false;

        angular.forEach($scope.files, function(file) {
            fd.append('name', $scope.data.name),
            fd.append('location', $scope.data.location),
            fd.append('description', $scope.data.description),
            fd.append('web', $scope.data.web),
            fd.append('phone', $scope.data.phone),
            fd.append('file', file),
            imaFajl = true;
        });
        if(imaFajl) {
            $http.post('/companies/update', fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            }).success(function(resp) {
                $scope.savebutton.disabled = false;
                $scope.infoMsg = "Podaci spašeni!";
                console.log("Data saved...");
                $route.reload();
            }).error(function(resp) {
                console.log("greska");
            });
        }
        else {
            $http.post('/companies/update', {
                name: $scope.data.name,
                location: $scope.data.location,
                description: $scope.data.description,
                web: $scope.data.web,
                phone: $scope.data.phone,
            }).success(function(resp) {
                $scope.savebutton.disabled = false;
                $scope.infoMsg = "Podaci spašeni!";
                console.log("Data saved...");
                
            }).error(function(resp) {
                console.log("greska");
            });  
        }
        
    };
       
    // Download CV-ja za studenta
    $scope.downloadCV = function() {
        alert("Kliknuo");
        $http.get('/students/download_cv?id=' + $scope.data.cv).success(function(data, status, headers, config) {});
    };

    // Izmijeni izgled i ponasanje dugmeta za upload CV-ja
    $(document).ready( function() {
        $('.btn-file :file').on('fileselect', function(event, numFiles, label) {
            $('#fajl').text(function() {
                return "{{ 'SELECTED_FILE' | translate }}: " + label;
            });
        });
    });

    $scope.isInfo = function() {
        return (!($scope.infoMsg === ""));
    }
    

}]);

// Prati sta se dogadja sa Browse dugmetom za upload CV-ja
$(document).on('change', '.btn-file :file', function() {
    var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
});

