(function () {


function Video($http,$q,$resource){
	var Video = {};
	
	Video.getVideoswithHttp=function(){
	     var deferred = $q.defer();
         $http.get('http://movieapp-sitepointdemos.rhcloud.com/api/movies')
                   .success(function(data,status){
                         deferred.resolve(data);
                   }).error(function(msg){
                         deferred.reject(msg);
                   });
          return deferred.promise;
	}


   Video.getVideosWithResources=function(){
	     return $resource('http://movieapp-sitepointdemos.rhcloud.com/api/movies/:id',{id:'@_id'},{
	     	update:{
                     method:'PUT'
	        }
	     });
	     
    }

    return Video;
}

angular
   .module('Services',[])
   .factory('Video',['$http','$q','$resource',Video]);


})();