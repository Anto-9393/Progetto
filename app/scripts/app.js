'use strict';

/**
 * @ngdoc overview
 * @name erasmusApp
 * @description
 * # erasmusApp
 *
 * Main module of the application.
 */
angular
  .module('erasmusApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    "ui.router"
  ])
  .config(function ($routeProvider, $stateProvider , $urlRouterProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home',{

      url:"/home",
      templateUrl:"views/main.html",
      data:{



      }
    })
  });
