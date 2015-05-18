app.controller("OglasiKompanijeStatisticsCtrl", ['$scope', '$http', '$window', '$location', 'AuthToken',  function($scope, $http, $window, $location, AuthToken, $translate) {
    // Referenciranje chartova
	var companyJobsChart = document.getElementById("companyJobsChartChart").getContext("2d");
    $scope.months = {"01" : "JANUARY", "02" : "FEBRUARY", "03" : "MARCH", "04": "APRIL", "05": "MAY", "06": "JUNE", "07": "JULY", "08": "AUGUST", "09": "SEPTEMBER", "10": "OCTOBER", "11": "NOVEMBER", "12": "DECEMBER"};
    $scope.companyJobs = {};
    $scope.companyJobs.from_m = "JANUARY";

    // Funkcija koja poziva servis i crta broj oglasa koje je kompanija objavila po mjesecima
    $scope.drawCompanyJobs = function() {
        // Ocitaj od kad do kad je potrebno prikazati podatke
        var from_m = $scope.companyJobs.from_m;
        var from_y = $scope.companyJobs.from_y;
        var to_m = $scope.companyJobs.to_m;
        var to_y = $scope.companyJobs.to_y;

        // Pozovi servis kojem se prosljedjuju datumi i koji vraca broj objavljenih oglasa
        $http.get('/users/get_companyJobs?from_y=' + from_y + '&from_m='+from_m+'&to_y='+to_y+'&to_m='+to_m).success(function(data, status, headers, config) {
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

            var companyJobsData = {
                labels: labels,
                datasets: [
                    {
                        label: "Jobs",
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
            new Chart(companyJobsChart).Line(companyJobsData);
        });    
    }

    
}]);



