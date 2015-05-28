app.controller('HomeController', ['$http','$scope','$location', function ($http, $scope,$location ) {

    // Za početak definirajmo neke metode
    // Metoda kupi posljednjih 9 oglasa
    $scope.viewLatestAds = function() {
        $http({ url: '/jobs/get_ordered_jobs', method: "GET", params: {count: 9}}).success(function(data, status, headers, config) {
            brojOglasa = data.number;

            for (i=0; i<brojOglasa; i++) {
                var oglas = data.jobs[i]; 
                $scope.oglasi.push(oglas);
            }
        });
    }

    // Metoda omogućava pretragu. Kupi vrijednost iz polja word i prosljedjuje servisu.
    $scope.search = function() { 
        $scope.lokacija = "-1";
        $scope.kategorija = "-1";
        
        $http.get('/jobs/get_jobs_search?word=' + $scope.word.toLowerCase()).success(function(data, status, headers, config) {
            $scope.oglasi = [];
            
            for (i = 0; i < data.number; i++) {
                $scope.oglasi.push(data.jobs[i]);
                console.log(data.jobs[i].name);
            }
        });
    }

    // Metoda se poziva nakon odabira lokacije iz list. Poziva servis koji filtrira oglase na osnovu odabrane lokacije
    $scope.filterByLocationOrCategory = function() {
        var params = "";
        if ($scope.lokacija != "-1") params = params + "location_id=" + $scope.lokacija + "&";
        if ($scope.kategorija != "-1") params = params + "category_id=" + $scope.kategorija;
        if (params != "") {
            $http.get('/jobs/get_jobs_location_category_search?' + params).success(function(data, status, headers, config) {
                $scope.oglasi = [];
                
                for (i = 0; i < data.number; i++) {
                    $scope.oglasi.push(data.jobs[i]);
                    console.log(data.jobs[i].name);
                }
            });
        } else {
            $scope.viewLatestAds();
        }
    }

    // Ucitaj lokacije u listu
    $http.get('/locations/getAllLocations').success(function(data, status, headers, config) {
        $scope.locations = data;
    });

    // Ucitaj kategorije
    $http.get('/categories/getAllCategories').success(function(data, status, headers, config) {
        $scope.categories = data;
    });

    // Neka pocetna inicijalizacija: nema oglasa, odabrane su sve lokacije i sve kategorije (nema filtera)
    $scope.oglasi=[];
    $scope.lokacija = "-1";
    $scope.kategorija = "-1";

    // Pozovi metodu koja prikazuje najnovije oglase
    $scope.viewLatestAds();
}]);



	
