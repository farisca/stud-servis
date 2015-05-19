angular.module('aplikacija')
    .controller('AdminStudentsCtrl', ['$http', '$location', '$window', '$routeParams', 'NotificationService', '$scope', function ($http, $location, $window, $routeParams, NotificationService, $scope) {
    
    var result;
    var studenti = [];
    var test;
    $scope.studenti=[]; 

    this.ban = function() {
        alert()            
    }

    var init = function () {
        
        result = $http({ url: '/students/get_all_students', 
            method: "GET",
        });
        
        result.success(function(data, status, headers, config) {

            //studenti = data.studenti;
            //alert(studenti);

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
        


