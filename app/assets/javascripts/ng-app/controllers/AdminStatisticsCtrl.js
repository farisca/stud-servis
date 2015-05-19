app.controller("AdminStatisticsCtrl", ['$scope', '$http', '$window', '$location', 'AuthToken', '$translate', function($scope, $http, $window, $location, AuthToken, $translate) {
    // Referenciranje chartova
	var signedUpUsersChart = document.getElementById("signedUpUsersChart").getContext("2d");
    var adsLocationChart = document.getElementById("adsLocationChart").getContext("2d");
    var registrationsChart = document.getElementById("registrationsChart").getContext("2d");

    // Neka pocetna inicijalizacija
    if ($translate.use() === 'en') {
        $scope.months = {"01" : "January", "02" : "February", "03" : "March", "04": "April", "05": "May", "06": "June", "07": "July", "08": "August", "09": "September", "10": "October", "11": "November", "12": "December"};
    }
    else {
        console.log(translate.use());
        $scope.months = {"01" : "Januar", "02" : "Februar", "03" : "Mart", "04": "April", "05": "May", "06": "Juni", "07": "Juli", "08": "August", "09": "Septembar", "10": "Oktobar", "11": "Novembar", "12": "Decembar"};
    }
    $scope.signedUpUsers = {};
    $scope.signedUpUsers.from_m = "JANUARY";
    $scope.alertSignedUpUsers = {};
    $scope.alertSignedUpUsers.period = {};
    $scope.alertSignedUpUsers.period.visible = false;
    $scope.alertSignedUpUsers.number = {};
    $scope.alertSignedUpUsers.number.visible = false;

    $scope.registrations = {};
    $scope.registrations.fromR_m = "JANUARY";
    $scope.alertRegistrations = {};
    $scope.alertRegistrations.period = {};
    $scope.alertRegistrations.period.visible = false;
    $scope.alertRegistrations.number = {};
    $scope.alertRegistrations.number.visible = false;

    // Provjeri da li je pocetni datum prije krajnjeg
    $scope.checkPeriod = function(from_m, from_y, to_m, to_y) {
        if (from_y > to_y || (from_y == to_y && from_m > to_m)) {
            $scope.alertSignedUpUsers.period.visible = true;
            return false;
        }
        return true;
    }

    // Provjerava da li je unesena godina broj
    $scope.checkYear = function(year) {
        if (isNaN(parseFloat(year)) || !/^\d{4}$/.test(year)) {
            $scope.alertSignedUpUsers.number.visible = true;
            return false;
        }
        return true;
    }

    $scope.checkPeriodRegistrations = function(fromR_m, fromR_y, toR_m, toR_y) {
        if (fromR_y > toR_y || (fromR_y == toR_y && fromR_m > toR_m)) {
            $scope.alertRegistrations.period.visible = true;
            return false;
        }
        return true;
    }


    $scope.checkYearRegistrations = function(year) {
        if (isNaN(parseFloat(year)) || !/^\d{4}$/.test(year)) {
            $scope.alertRegistrations.number.visible = true;
            return false;
        }
        return true;
    }

    // Funkcija koja poziva servis i crta broj registriranih korisnika po mjesecima
    $scope.drawSignedUpUsers = function() {
        $scope.alertSignedUpUsers.period.visible = false;
        $scope.alertSignedUpUsers.number.visible = false;

        // Ocitaj od kad do kad je potrebno prikazati podatke
        var from_m = $scope.signedUpUsers.from_m;
        var from_y = $scope.signedUpUsers.from_y;
        var to_m = $scope.signedUpUsers.to_m;
        var to_y = $scope.signedUpUsers.to_y;

        if (!$scope.checkYear(from_y) || !$scope.checkYear(to_y)) return;
        if (!$scope.checkPeriod(from_m, from_y, to_m, to_y)) return;

        // Pozovi servis kojem se prosljedjuju datumi i koji vraca broj registriranih korisnika
        $http.get('/users/get_signedupusers?from_y=' + from_y + '&from_m='+from_m+'&to_y='+to_y+'&to_m='+to_m).success(function(data, status, headers, config) {
            var serviceResponse = data;
            var labels = [];
            // Kreiranje labela u grafiku -> svi mjeseci izmedju zadanih u formatu M - YYYY 
            for(year = from_y; year <= to_y; year++) {
                for (month = (year == from_y ? from_m : 1); month <= (year == to_y ? to_m : 12); month++) {
                    labels.push(month + " - " + year);
                }
            }

            console.log("Labele: " + labels);
            console.log("Podaci: " + serviceResponse);

            var signedupUsersData = {
                labels: labels,
                datasets: [
                    {
                        label: "Sign ups",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: serviceResponse
                    }
                ]
            };
            new Chart(signedUpUsersChart).Line(signedupUsersData);
        });    
    }

    
    $scope.drawRegistrations = function() {
        $scope.alertRegistrations.period.visible = false;
        $scope.alertRegistrations.number.visible = false;

        // Ocitaj od kad do kad je potrebno prikazati podatke
        var fromR_m = $scope.signedUpUsers.fromR_m;
        var fromR_y = $scope.signedUpUsers.fromR_y;
        var toR_m = $scope.signedUpUsers.toR_m;
        var toR_y = $scope.signedUpUsers.toR_y;

        if (!$scope.checkYearRegistrations(fromR_y) || !$scope.checkYear(toR_y)) return;
        if (!$scope.checkPeriodRegistrations(fromR_m, fromR_y, toR_m, toR_y)) return;

        // Pozovi servis kojem se prosljedjuju datumi i koji vraca broj registriranih korisnika
        $http.get('/registrations/get_registrations_time?fromR_y=' + fromR_y + '&fromR_m='+fromR_m+'&toR_y='+toR_y+'&toR_m='+toR_m).success(function(data, status, headers, config) {
            var response = data;
            var labels = [];
            // Kreiranje labela u grafiku -> svi mjeseci izmedju zadanih u formatu M - YYYY 
            for(year = from_y; year <= to_y; year++) {
                for (month = (year == from_y ? from_m : 1); month <= (year == to_y ? to_m : 12); month++) {
                    labels.push(month + " - " + year);
                }
            }

            console.log("Labele: " + labels);
            console.log("Podaci: " + response);

            var registrationsData = {
                labels: labels,
                datasets: [
                    {
                        label: "Sign ups",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: response
                    }
                ]
            };
            new Chart(registrationsChart).Line(registrationsData);
        });    
    }


    $scope.ads_locations = {};
    $scope.ads_locations.locations = 1;
    //$scope.ads_locations.location_id 

    //Funkcija koja crta grafig broj prijavljanih oglasa po odabranoj lokaciji
    $scope.drawAdsLocation = function() {



        //poziv servisa koji na osnovu proslijedjene lokacije vraca broj korisnika
        var result;
        var location_id = $scope.ads_locations.location_id;

        result = $http({ url: '/jobs/get_jobs_at_location', 
            method: "GET",
            params: {location_id: location_id}
        });

        result.success(function(data, status, headers, config) {
            var numberOfAds = data.number;
            var labels = [];
            alert("Broj oglasa: "+data.number);

            labels.push("1");
            labels.push("2");
            var adsLocationData = {
                labels: labels,
                datasets: [
                    {
                        label: "Ads on locaction",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: numberOfAds
                    }
                ]
            };
            new Chart(adsLocationChart).Line(adsLocationData);


        });    
    }



    
}]);



