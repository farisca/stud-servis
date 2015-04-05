/*angular
    .module('aplikacija', [
        'ngRoute',
        'templates'
    ]).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'login.html',
                controller: 'login'
            });
        $locationProvider.html5Mode(true);
    });*/

angular$this.val()
    .module('aplikacija', [
        'ngRoute',
        'templates'
    ]).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/registracija', {
                templateUrl: 'registracija.html',
                controller: 'register'
            }).when('/login', {
                templateUrl: 'login.html',
                controller: 'login'
            }).when('/kompanija', {
                templateUrl: 'registracijaKompanije.html',
                controller: 'registerCompany'
            });
        $locationProvider.html5Mode(true);
    });


/*angular
    .module('aplikacija', [
        'ngRoute',
        'templates'
    ]).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'login.html',
                controller: 'login'
            }).whern ('/azra', {
                templateUrl: 'login.html',
                controller: 'login'
            });
        $locationProvider.html5Mode(true);
    });*/


/*angular
    .module('aplikacija', [
        'ngRoute',
        'templates'
    ]).config(function($routeProvider, $locationProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'login.html',
        controller: 'login'
      }).
      when('/registracija', {
        templateUrl: 'registracija.html',
        controller: 'register'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);*/

