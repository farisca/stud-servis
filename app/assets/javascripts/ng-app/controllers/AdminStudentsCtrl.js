angular.module('aplikacija')
    .controller('AdminStudentsCtrl', ['$http', '$location', '$window', '$routeParams', 'NotificationService', '$scope', function ($http, $location, $window, $routeParams, NotificationService, $scope) {
    
    var result;
    var ban;
    var studenti = [];
    var test;

    $scope.studenti=[]; 

    this.bannStudent = function(id_student) {
        //alert(id_student);
        ban = $http({ url: '/students/bann_student', 
            method: "GET",
            params: {id_student: id_student}
        });
        
        ban.success(function(data, status, headers, config) {
            //alert(data.status);
            
            niz = $scope.studenti;
            for (i=0; i<niz.length; i++) {
                if(niz[i]["id"] == id_student)
                    $scope.studenti[i]["bann"] = data.status;
            }
        });
    }

    this.unbannStudent = function(id_student) {
        //alert(id_studenta);
        ban = $http({ url: '/students/unbann_student', 
            method: "GET",
            params: {id_student: id_student}
        });
        
        ban.success(function(data, status, headers, config) {
            niz = $scope.studenti;
            for (i=0; i<niz.length; i++) {
                if(niz[i]["id"] == id_student)
                    $scope.studenti[i]["bann"] = data.status;
            }
        });

    }

    var init = function () {
        
        result = $http({ url: '/students/get_all_students', 
            method: "GET",
        });
        
        result.success(function(data, status, headers, config) {

            var brojStudenata = data.students.length

            for (i=0; i<brojStudenata; i++) {
                var s = data.students[i]; 
                $scope.studenti.push(s);
                
                /*$scope.student_name = s["name"];
                $scope.student_surname = s["surname"];
                $scope.student_location = s["location_id"];
                $scope.student_university = s["university"];
                $scope.student_faculty = s["faculty"];*/
            }
        });
    }
    init();
}]);
        


