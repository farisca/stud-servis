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

angular
    .module('aplikacija', [
        'ngRoute',
        'templates'
    ]).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/registracija', {
                templateUrl: 'registracija.html',
                controller: 'registerController'
            }).when('/potvrdaORegistraciji', {
                templateUrl: 'potvrdaORegistraciji.html',
            }).when('/oglasi', {
                templateUrl: 'oglasi.html',
                controller: 'OglasiCtrl'
            }).when('/unosOglasa', {
                templateUrl: 'unosOglasa.html',
                controller: 'JobsController'
            }).when('/login', {
                templateUrl: 'login.html',
                controller: 'loginController'
            }).when('/kompanija', {
                templateUrl: 'registracijaKompanije.html',
                controller: 'registerCompanyController'
            }).when('/promjenaSifre', {
                templateUrl: 'promjenaSifre.html',
                controller: 'passwordController'
            }).when('/confirm', {
                templateUrl: 'confirm.html',
                controller: 'confirmCtrl'
            }).when('/unosEmail', {
                templateUrl: 'unosEmail.html',
                controller: 'emailController'
            }).when('/oglas/:id', {
                templateUrl: 'odabraniOglas.html',
                controller: 'ChoosenAd'
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

