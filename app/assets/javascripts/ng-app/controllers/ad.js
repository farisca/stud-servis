angular.module('aplikacija')
    .controller('ChoosenAd', ['$http', '$location', '$window', '$routeParams', 'NotificationService', '$scope', function ($http, $location, $window, $routeParams, NotificationService, $scope) {
        this.kategorija="";
        var res;
        var prijava;
    
        var url = $location.path();
        var job_id = url.replace("/oglas/","");

        this.prijavi = function() {

            if (rola == 0) {
                prijava = $http({ url: '/registrations/make_registration', 
                        method: "GET",
                        params: {job_id: job_id, active: 1}
                });
                prijava.success(function(data, status, headers, config) {
                    // spasi notifikaciju
                    
                    tekst = "Student se prijavio na oglas " ;
                    NotificationService.new_notification(tekst, $scope.company_user_id);
                    alert("Uspješno ste prijavljeni na ovaj oglas.");
                    $location.path(path);
                });
            }
            else {
                //alert("kompanija");
                prijava = $http({ url: '/registrations/get_all_students', 
                        method: "GET",
                        params: {id: job_id}
                });

                prijava.success(function(data, status, headers, config) {
                    //alert("Uspjeh");
                    alert("Na oglas je prijavljeno: "+data.number+" studenata");
                    //alert(JSON.stringify(data.students));
                    $location.path(path);
                });

            }
        }

        $('.oglas_edit').click(function() {
            $('.forma_izmjena').show();
            $('.editAd_button').show();
        });

        var user;
        var rola;
    	var init = function () {
            $('.forma_izmjena').hide();
            $('.editAd_button').hide();

            user = $http({ url: '/users/get_role', 
                    method: "GET",
            });
            user.success(function(data, status, headers, config) {
                rola = data.rola;
                if (rola == 0) {
                    $('.oglass_button').val("Prijavi se na ovaj oglas");
                    $('.oglas_edit').hide();
                }
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

                var help = $("edit-Ad").html();
               
                $scope.ad_kategorija = data.category;
                $scope.ad_kompanija = data.company;
                $scope.ad_opsi = data.description;
                $scope.ad_lokacija = data.location;
                $scope.trajanje = data.duration;
                // Ne dirati ovo, treba mi za slanje notifikacije!!!!!
                $scope.company_user_id = data.company_user_id;
                var path = 'oglas/'+data.id;
                $location.path(path);
            });
        };
        
        init();
                
    }]);


