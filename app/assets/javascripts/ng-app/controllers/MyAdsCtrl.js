app.controller("MyAdsCtrl", ['$scope', '$http', '$window', '$location', 'AuthToken',  function($scope, $http, $window, $location, AuthToken, $translate) {
	var kon;
	$scope.oglasi = [];

	kon = $http({ url: '/registrations/get_my_jobs', 
        method: "GET",
        params: {role: 0}
    });
    
    kon.success(function(data, status, headers, config) {
        brojOglasa = data.number;

        for (i=0; i<brojOglasa; i++) {
            var oglas = data.jobs[i]; 
            $scope.oglasi.push(oglas);
        }
        console.log(brojOglasa);
	});
}]);



