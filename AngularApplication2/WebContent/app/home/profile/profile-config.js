angular.module("application").
config(function($stateProvider,$urlRouterProvider){
$stateProvider.state("profile",{
 	url:"/profile",
 	views:{
 		"body":{templateUrl:"app/home/profile/profile.html",controller:"profilecontroller"},
 		"leftmenu":{templateUrl:"app/home/profile/profile-leftmenu.html" },
			"header":{templateUrl:"views/header.html" },
			"nav":{templateUrl:"views/topnav.html" }
 	}
  });
});