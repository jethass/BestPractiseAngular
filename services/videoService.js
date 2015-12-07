(function () {
'use strict';

function Video($http,$q,$resource){
	var Factory = {};
	
	Factory.getVideoswithHttp=function(){
	     var deferred = $q.defer();
         $http.get('http://movieapp-sitepointdemos.rhcloud.com/api/movies')
                   .success(function(data,status){
                         deferred.resolve(data);
                   }).error(function(msg){
                         deferred.reject(msg);
                   });
          return deferred.promise;
	}


   Factory.getVideosWithResources=function(){
	     return $resource('http://movieapp-sitepointdemos.rhcloud.com/api/movies/:id',{id:'@_id'},{
	     	update:{
                     method:'PUT'
	        }
	     });
	     
    }

    return Factory;
}

angular
   .module('Services',[])
   .factory('Video',Video);

Video.$inject=['$http','$q','$resource'];


})();