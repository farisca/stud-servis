app.controller("AdminStatisticsCtrl", ['$scope', '$http', '$window', '$location', 'AuthToken', '$translate', function($scope, $http, $window, $location, AuthToken, $translate) {
    // Referenciranje chartova
	var signedUpUsersChart = document.getElementById("signedUpUsersChart").getContext("2d");
    var adsLocationChart = document.getElementById("adsLocationChart").getContext("2d");
    var registrationsChart = document.getElementById("registrationsChart").getContext("2d");
    var categoriesChart = document.getElementById("categoriesChart").getContext("2d");
    var adsPerCompaniesChart = document.getElementById("adsCompaniesChart").getContext("2d");

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
        var fromR_m = $scope.registrations.fromR_m;
        var fromR_y = $scope.registrations.fromR_y;
        var toR_m = $scope.registrations.toR_m;
        var toR_y = $scope.registrations.toR_y;
        console.log("Drawing registrations...");
        if (!$scope.checkYearRegistrations(fromR_y) || !$scope.checkYear(toR_y)) return;
        if (!$scope.checkPeriodRegistrations(fromR_m, fromR_y, toR_m, toR_y)) return;

        // Pozovi servis kojem se prosljedjuju datumi i koji vraca broj registriranih korisnika
        $http.get('/registrations/get_registrations_time?fromR_y=' + fromR_y + '&fromR_m='+fromR_m+'&toR_y='+toR_y+'&toR_m='+toR_m).success(function(data, status, headers, config) {
            var response = data;
            var labels = [];
            // Kreiranje labela u grafiku -> svi mjeseci izmedju zadanih u formatu M - YYYY 
            for(year = fromR_y; year <= toR_y; year++) {
                for (month = (year == fromR_y ? fromR_m : 1); month <= (year == toR_y ? toR_m : 12); month++) {
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

    $scope.drawAdsLocation = function() {
        // Pozovi servis kojem se prosljedjuju datumi i koji vraca broj registriranih korisnika
        $http.get('/jobs/get_jobs_per_locations').success(function(data, status, headers, config) {
            var labels = [];
            var numbers = [];

            for(var i = 0; i < data.data.length; i++) {
                labels.push(data.data[i].location);
                numbers.push(data.data[i].number);
            }

            console.log("Labele: " + labels);
            console.log("Podaci: " + numbers);

            var adsLocationsData = {
                labels: labels,
                datasets: [
                    {
                        label: "Sign ups",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(100,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        scaleShowLabels : true,
                        data: numbers
                    }
                ]
            };
            new Chart(adsLocationChart).Radar(adsLocationsData);
        }); 
    }

    $scope.drawBarChart= function(){
        // Pozovi servis kojem se prosljedjuju datumi i koji vraca broj registriranih korisnika
        $http.get('/jobs/get_jobs_per_categories').success(function(data, status, headers, config) {
            var labels = [];
            var numbers = [];

            for(var i = 0; i < data.data.length; i++) {
                labels.push(data.data[i].category);
                numbers.push(data.data[i].number);
            }

            console.log("Labele: " + labels);
            console.log("Podaci: " + numbers);

            var adsCategoriesData = {
                labels: labels,
                datasets: [
                    {
                        label: "Sign ups",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(100,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        scaleShowLabels : true,
                        data: numbers
                    }
                ]
            };
            var options = {
                scaleBeginAtZero : true,
                scaleShowGridLines : true,
                scaleGridLineColor : "rgba(0,0,0,.05)",
                scaleGridLineWidth : 1,
                scaleShowHorizontalLines: true,
                scaleShowVerticalLines: true,
                barShowStroke : true,
                barStrokeWidth : 2,
                barValueSpacing : 5,
                barDatasetSpacing : 1,
                legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
            }
            new Chart(categoriesChart).Bar(adsCategoriesData, options);
        }); 
    }

    $scope.drawAdsPerCompany = function() {
        // Pozovi servis kojem se prosljedjuju datumi i koji vraca broj registriranih korisnika
        $http.get('/jobs/get_jobs_per_companies').success(function(data, status, headers, config) {
            var labels = [];
            var numbers = [];

            for(var i = 0; i < data.data.length; i++) {
                labels.push(data.data[i].company);
                numbers.push(data.data[i].number);
            }

            console.log("Labele: " + labels);
            console.log("Podaci: " + numbers);

            var adsPerCompaniesData = {
                labels: labels,
                datasets: [
                    {
                        label: "Sign ups",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(100,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        scaleShowLabels : true,
                        data: numbers
                    }
                ]
            };
            var options = {
                scaleBeginAtZero : true,
                scaleShowGridLines : true,
                scaleGridLineColor : "rgba(0,0,0,.05)",
                scaleGridLineWidth : 1,
                scaleShowHorizontalLines: true,
                scaleShowVerticalLines: true,
                barShowStroke : true,
                barStrokeWidth : 2,
                barValueSpacing : 5,
                barDatasetSpacing : 1,
                legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
            }
            new Chart(adsPerCompaniesChart).Bar(adsPerCompaniesData, options);
        }); 
    }
    
}]);