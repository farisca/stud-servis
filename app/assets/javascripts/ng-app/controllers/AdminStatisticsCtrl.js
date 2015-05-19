app.controller("AdminStatisticsCtrl", ['$scope', '$http', '$window', '$location', 'AuthToken', '$translate', function($scope, $http, $window, $location, AuthToken, $translate) {
    // Referenciranje chartova
	var signedUpUsersChart = document.getElementById("signedUpUsersChart").getContext("2d");
    var adsLocationChart = document.getElementById("adsLocationChart").getContext("2d");
    var registrationsChart = document.getElementById("registrationsChart").getContext("2d");
    var categoriesChart = document.getElementById("categoriesChart").getContext("2d");

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
        var data = {
    labels: ["Mostar", "Sarajevo", "Zenica", "Tuzla", "Neum", "Bihac", "Jajce"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 96, 27, 100]
        }
    ]
};
var options=
    {
    //Boolean - Whether to show lines for each scale point
    scaleShowLine : true,

    //Boolean - Whether we show the angle lines out of the radar
    angleShowLineOut : true,

    //Boolean - Whether to show labels on the scale
    scaleShowLabels : false,

    // Boolean - Whether the scale should begin at zero
    scaleBeginAtZero : true,

    //String - Colour of the angle line
    angleLineColor : "rgba(0,0,0,.1)",

    //Number - Pixel width of the angle line
    angleLineWidth : 1,

    //String - Point label font declaration
    pointLabelFontFamily : "'Arial'",

    //String - Point label font weight
    pointLabelFontStyle : "normal",

    //Number - Point label font size in pixels
    pointLabelFontSize : 10,

    //String - Point label font colour
    pointLabelFontColor : "#666",

    //Boolean - Whether to show a dot for each point
    pointDot : true,

    //Number - Radius of each point dot in pixels
    pointDotRadius : 3,

    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth : 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius : 20,

    //Boolean - Whether to show a stroke for datasets
    datasetStroke : true,

    //Number - Pixel width of dataset stroke
    datasetStrokeWidth : 2,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill : true,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

}

        
new Chart(adsLocationChart).Radar(data, options);  
    }


$scope.drawBarChart= function(){
    
    var data = {
    labels: ["IT", "Medicine", "Farmacy", "Economy", "Psihology", "Cosmetics", "Consulting"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [32, 15, 34, 4, 16, 33, 11]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};

var options={
    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero : true,

    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : true,

    //String - Colour of the grid lines
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth : 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - If there is a stroke on each bar
    barShowStroke : true,

    //Number - Pixel width of the bar stroke
    barStrokeWidth : 2,

    //Number - Spacing between each of the X value sets
    barValueSpacing : 5,

    //Number - Spacing between data sets within X values
    barDatasetSpacing : 1,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

}


 new Chart(categoriesChart).Bar(data, options);
}
    
}]);



