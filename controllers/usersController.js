(function () {
'use strict';

function usersController($scope,User){
  
   var usersCtrl=this;
   usersCtrl.users=[];
   usersCtrl.user=false;

    User.query().$promise.then(function(data) {
         usersCtrl.users= data;
    });
   

    usersCtrl.showUser=function(idUser){
       usersCtrl.user=User.get({user: idUser});
    };

    usersCtrl.editUser=function(idUser){
      usersCtrl.user=User.update({user: idUser},{name:"hassine",email:"monemail@hotmail.com",website:"hassine-lataoui.com"});
   
    };
    usersCtrl.deleteUser=function(idUser){
       angular.forEach(usersCtrl.users, function(value, key) {
          if(value.id==idUser){
            usersCtrl.users.splice(key,1); 
          }
       });
    };

}

angular
   .module('Controllers',[])
   .controller('usersController',usersController);

usersController.$inject=['$scope','User'];


})();