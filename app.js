(function () {

angular
   .module('App',['Controllers','Services','ngRoute','ngResource'])
   .config(Config);

function Config($routeProvider) { 
	   $routeProvider
		   .when('/', {
		               templateUrl: 'partials/home.html',
		               controller: 'homeController',
		               controllerAs: 'vm'    
		              }
		   );
}



})();