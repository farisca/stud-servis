angular.module('aplikacija')
    .controller('ChoosenAd', ['$http', '$location', '$window', '$routeParams', function ($http, $location, $window, $scope, $routeParams) {
        this.kategorija="";
        var res;
        var prijava;
    
        var url = $location.path();
        var job_id = url.replace("/oglas/","");

        this.prijavi = function() {

            if (rola == "student") {
                prijava = $http({ url: '/registrations/make_registration', 
                        method: "GET",
                        params: {job_id: job_id, active: 1}
                });
                prijava.success(function(data, status, headers, config) {
                    alert(data.status);
                    $location.path(path);
                });
            }
            else {
                prijava = $http({ url: '/registrations/get_all_students', 
                        method: "GET",
                        params: {id: job_id}
                });

                prijava.success(function(data, status, headers, config) {
                    alert(data.number);
                    alert(JSON.stringify(data.students));
                    $location.path(path);
                });

            }
        }

        var user;
        var rola;
    	var init = function () {

            user = $http({ url: '/users/get_user', 
                    method: "GET",
            });
            user.success(function(data, status, headers, config) {
                rola = data.rola;
                if (data.rola == "student")
                    $('.oglass_button').val("Prijavi se na ovaj oglas");
                else 
                    $('.oglass_button').val("Pregledaj prijavljene studente");
            });

            
            res = $http({ url: '/jobs/get_job', 
                    method: "GET",
                    params: {id: job_id}
            });

            res.success(function(data, status, headers, config) {
                $('.kategorija').html(data.category);
                $('.kompanija').html(data.company);
                $('.opis').html(data.description);
                $('.lokacija').html(data.location);
                $('.trajanje').html(data.duration);
                var path = 'oglas/'+data.id;
                $location.path(path);
            });
        };
        
        init();
                
    }]);


