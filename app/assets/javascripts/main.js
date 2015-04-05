var app = angular
    .module('aplikacija', [
        'ngRoute',
        'templates'
    ]).config(function ($routeProvider, $locationProvider) {
        $routeProvider
        	.when('/registracija', {
                templateUrl: 'registracija.html',
                controller: 'RegisterCtrl'
            })
            .when('/login', {
                templateUrl: 'login.html',
                controller: 'LoginCtrl'
            });
        $locationProvider.html5Mode(true);
    });