angular.module("application").
config(function($stateProvider,$urlRouterProvider){
$stateProvider.state("updateNickName",{
  	url:"/updateNickName",
  	views:{
  		"body":{templateUrl:"app/home/profile/nickname/updateNickName.html",controller:"updateNickNamecontroller"},
  		"leftmenu":{templateUrl:"app/home/profile/profile-leftmenu.html" },
			"header":{templateUrl:"views/header.html" },
			"nav":{templateUrl:"views/topnav.html" }
  	}
   });
 
});