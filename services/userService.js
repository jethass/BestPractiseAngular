(function () {
'use strict';

function Users($resource){
	     return $resource('http://jsonplaceholder.typicode.com/users/:user',{user:'@user'},{
	     	update:{
                     method:'PUT'
	        }
	     });
}

angular
   .module('Services',[])
   .factory('User',Users);

Users.$inject=['$resource'];


})();