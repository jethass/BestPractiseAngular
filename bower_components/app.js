var app=angular.module('App',['Controllers','Services','ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
   .when('/', {
               templateUrl: 'partials/home.html',
               controller: ''    
              }
   );
  
});


var  Controllers=angular.module('Controllers',[]);
var  Services=angular.module('Services',[]);

