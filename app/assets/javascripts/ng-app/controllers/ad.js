angular.module('aplikacija')
    .controller('ChoosenAd', ['$http', '$location', '$window', '$routeParams', function ($http, $location, $window, $scope, $routeParams) {
        this.kategorija="";
        var res;
    
        var url = $location.path();
        var job_id = url.replace("/oglas/","");

    	var init = function () {

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


