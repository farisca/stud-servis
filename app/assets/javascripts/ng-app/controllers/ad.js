angular.module('aplikacija')
    .controller('ChosenAd', ['$http', '$location', '$window', '$routeParams', 'NotificationService', '$scope', 'AuthToken', function ($http, $location, $window, $routeParams, NotificationService, $scope, AuthToken) {
        this.kategorija="";
        var res;
        var prijava;
        var edit;
    
        var url = $location.path();
        var job_id = url.replace("/oglas/","");

        $scope.data = {};
        $scope.showApplicationsVisible = false;
        $scope.showStudentsProfileVisible = false;
        $scope.studentsProfile = {};

        // Funkcija za prikaz buttona u ovisnosti od role korisnika - prijava na oglas ili prikat prijava
        $scope.isVisible = function(part) {
            if(part == "apply" && AuthToken.tipKorisnika() == 0) return true;
            if(part == 'showApplications' && AuthToken.tipKorisnika() == 1) return true;
            return false;
        }

        $scope.apply = function() {
            console.log("Applying");
            $http.get('/registrations/make_registration?job_id=' + job_id + "&active=1").success(function(data, status, headers, config) {
                NotificationService.new_notification(tekst, $scope.company_user_id, job_id);
                alert("Uspješno ste prijavljeni na ovaj oglas.");
                $location.path(path);
            });
        }

        $scope.showApplications = function() {
            console.log("Showing applications");
            // Prikazi panel s listom studenata koji su se prijavili
            $scope.showApplicationsVisible = true;
            // Dohvati podatke o studentima
            $http.get('/registrations/get_all_students?id=' + job_id).success(function(data, status, headers, config) {
                 $scope.students = data.students;
            });
        }

        $scope.showStudentsProfile = function(id) {
            console.log("Showing profile: " + id);
            // Dohvati podatke o studentu
            $http.get('/students/get_student_by_id?id=' + id).success(function(data, status, headers, config) {
                $scope.showStudentsProfileVisible = true;
                $scope.studentsProfile.student = data.student;
            });
        }

        $scope.editThisAd = function() {
            var nova_kategorija = $scope.novaKategorija;
            var nova_lokacija = $scope.novaLokacija;
            var novi_opis = $('.noviOpis').val();
            var novo_trajanje = $('.novoTrajanje').val();
           
            edit = $http({ url: '/jobs/update_job', 
                        method: "PUT",
                        params: {job_id: job_id, category: nova_kategorija, location: nova_lokacija, description: novi_opis, duration: novo_trajanje}
                });
            edit.success(function(data, status, headers, config) {
                //alert(data.status);
                //alert(data.trajanje);
                $scope.data = data;
                $('.kategorija').html(data.category);
                $('.kompanija').html(data.company);
                $('.opis').html(data.description);
                $('.lokacija').html(data.location);
                //$('.trajanje').html(data.duration);
                $('.edtitForma').hide();
            });
              
        }

        this.prijavi = function() {

            if (rola == 0) {
                prijava = $http({ url: '/registrations/make_registration', 
                        method: "GET",
                        params: {job_id: job_id, active: 1}
                });
                prijava.success(function(data, status, headers, config) {
                    // spasi notifikaciju
                    
                    tekst = "Student se prijavio na oglas " ;n
                    console.log(tekst, $scope.company_user_id, job_id);
                    NotificationService.new_notification(tekst, $scope.company_user_id, job_id);
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
            $('.edtitForma').show();
            
        });



        

        var user;
        var rola;
    	var init = function () {
            $('.forma_izmjena').hide();
            $('.edtitForma').hide();
            // $('.editAd_button').hide();

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
                $scope.data = data;
                $('.kategorija').html(data.category);
                $('.kompanija').html(data.company);
                $('.opis').html(data.description);
                $('.lokacija').html(data.location);
                $('.trajanje').html(data.duration);

                var help = $("edit-Ad").html();

                $http.get('/locations/getAllLocations').success(function(data, status, headers, config) {
                   $scope.all_locations = data;
                 });

                $http.get('/categories/getAllCategories').success(function(data, status, headers, config) {
                    $scope.all_categories = data;
                });
                       
                $scope.novaKategorija = data.c_id;
                $scope.novaLokacija = data.l_id;

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


