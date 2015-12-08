(function () {
'use strict';
angular
   .module('App',['Controllers','Services','ngRoute','ngResource'])
   .config(Config);

Config.$inject=['$routeProvider'];

function Config($routeProvider) { 
	   $routeProvider
		   .when('/', {
		               templateUrl: 'partials/users.html',
		               controller: 'usersController',
		               controllerAs: 'usersCtrl'    
		              }
		   );
}


})();