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

    var init = function () {
        
        result = $http({ url: '/companies/get_all_companies', 
            method: "GET",
        });
        
        result.success(function(data, status, headers, config) {

            var brojKompanija = data.companies.length

            for (i=0; i<brojKompanija; i++) {
                var kompan = data.companies[i]; 
                $scope.kompanije.push(kompan);
            }
        });
    }
    init();
}]);
        


