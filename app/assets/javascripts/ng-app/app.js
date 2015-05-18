'use strict';

var app = angular
    .module('aplikacija', [
        'ngRoute',
        'templates',
        'pascalprecht.translate',
        'ui.bootstrap',
    ]);
    app.config(['$routeProvider','$locationProvider',function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/registracija', {
                templateUrl: 'registracija.html',
                controller: 'registerController'
            }).
            when('/potvrdaORegistraciji', {
                templateUrl: 'potvrdaORegistraciji.html',
            }).
            when('/potvrdaOUnesenomOglasu', {
                templateUrl: 'potvrdaOUnesenomOglasu.html',
            }).
            when('/oglasi', {
                templateUrl: 'oglasi.html',
                controller: 'OglasiCtrl'
            }).
            when('/admin', {
                templateUrl: 'statistics.html',
                controller: 'AdminStatisticsCtrl'
            }).
            when('/admin/locations', {
                templateUrl: 'locations.html',
                controller: 'AdminLocationsCtrl'
            }).
            when('/admin/categories', {
                templateUrl: 'categories.html',
                controller: 'AdminCategoriesCtrl'
            }).
            when('/admin/students', {
                templateUrl: 'students.html',
                controller: 'AdminStudentsCtrl'
            }).
            when('/admin/companies', {
                templateUrl: 'companies.html',
                controller: 'AdminCompaniesCtrl'
            }).
            when('/admin/statistics', {
                templateUrl: 'statistics.html',
                controller: 'AdminStatisticsCtrl'
            }).
            when('/notifikacije', {
                templateUrl: 'mynotifications.html',
                controller: 'NotificationsCtrl'
            }).
            when('/listaOglasa', {
                templateUrl: 'listaOglasa.html',
                controller: 'JobsController'
            }).
            when('/myads', {
                templateUrl: 'myads.html',
                controller: 'MyAdsCtrl'
            }).
            when('/unosOglasa', {
                templateUrl: 'unosOglasa.html',
                controller: 'JobsController'
            }).
            when('/login', {
                templateUrl: 'login.html',
                controller: 'loginController'
            }).
            when('/profil', {
                templateUrl: 'profil.html',
                controller: 'profilCtrl'
            }).
            when('/kompanija', {
                templateUrl: 'registracijaKompanije.html',
                controller: 'registerCompanyController'
            }).
            when('/promjenaSifre', {
                templateUrl: 'promjenaSifre.html',
                controller: 'passwordController'
            }).
            when('/confirm', {
                templateUrl: 'confirm.html',
                controller: 'confirmCtrl'
            }).
            when('/unosEmail', {
                templateUrl: 'unosEmail.html',
                controller: 'emailController'
            }).
            when('/oglas/:id', {
                templateUrl: 'odabraniOglas.html',
                controller: 'ChoosenAd'
            }).
            when('/home', {
                templateUrl: 'home.html',
                controller: 'HomeController'
            }).
            when('/', {
                templateUrl: 'home.html',
                controller: 'HomeController'
            }).
            when('/oglasBox', {
                templateUrl: 'oglasBox.html',
                controller: 'oglasBoxController'
            }).
            when('/editAd', {
                templateUrl: 'editAd.html',
                controller: 'editAdController'
            });
        $locationProvider.html5Mode(true);
    }]);