angular.module('aplikacija')
    .controller('AdminCompaniesCtrl', ['$http', '$location', '$window', '$routeParams', 'NotificationService', '$scope', function ($http, $location, $window, $routeParams, NotificationService, $scope) {
    
    var result;
    var ban;
    var kompanije = [];
    var test;
    var niz = [];
    $scope.kompanije=[]; 

    this.bannCompany = function(id_company) {
        ban = $http({ url: '/companies/bann_company', 
            method: "GET",
            params: {id_company: id_company}
        });
        
        ban.success(function(data, status, headers, config) {
            
            niz = $scope.kompanije;
            for (i=0; i<niz.length; i++) {
                if(niz[i]["id"] == id_company)
                    $scope.kompanije[i]["bann"] = data.status;
            }
        });
    }

    this.unbannCompany = function(id_company) {
        ban = $http({ url: '/companies/unbann_company', 
            method: "GET",
            params: {id_company: id_company}
        });
        
        ban.success(function(data, status, headers, config) {
            niz = $scope.kompanije;
            for (i=0; i<niz.length; i++) {
                if(niz[i]["id"] == id_company) 
                    $scope.kompanije[i]["bann"] = data.status;
            }
        });

    }

    $scope.loadCompanies = function() {
        $http.get('/companies/get_all_companies').success(function(data, status, headers, config) {
            $scope.kompanije = data.companies;
        });
    }
    $scope.loadCompanies();

    this.promoteCompany = function(company_id) {
        $http.get('/companies/promote_company?company_id=' + company_id).success(function(data, status, headers, config) {
            $scope.loadCompanies();
        });
    }
}]);

