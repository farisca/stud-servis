app.controller("AdminStatisticsCtrl", ['$scope', '$http', '$window', '$location', 'AuthToken',  function($scope, $http, $window, $location, AuthToken, $translate) {
	
    console.log("Dodao statistike");
	var ctx = document.getElementById("signedUpUsersChart").getContext("2d");

    $http.get('/users/get_signedupusers?from_y=2013&from_m=3&to_y=2016&to_m=3').success(function(data, status, headers, config) {
         console.log(Object.keys(data));

         
         var signedupUsersData = {
            labels: Object.keys(data),
            datasets: [
                {
                    label: "My First dataset",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: [65, 59, 80]
                }
            ]
        };
         //console.log(data.(Object.keys(data));
         //signedupUsersData.datasets.data = Object.values(data);
         

         var signedUpUsersChart = new Chart(ctx).Line(signedupUsersData);
    });

    

}]);



