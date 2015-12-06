(function () {

function getVideos($scope,$log,Video){
	//utilisation le service video avec $http
	var vm=this;
	vm.videos=Video.getVideoswithHttp().then(
                        function(data) {
                        	$log.debug(data);
                            vm.videos = data;
                        },
                        function(msg) {
                            alert("Une erreur s'est produite lors de connexion au web service!")
                        }
    );
    //utilisation le service video avec $resource
    vm.videooos=Video.getVideosWithResources().query();

}

angular
   .module('Controllers',[])
   .controller('homeController',['$scope','$log','Video',getVideos]);

})();