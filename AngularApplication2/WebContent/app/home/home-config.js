angular.module("application").
config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/home");
	$stateProvider.state("home",{
		url:"/home",
		views:{
			"body":{templateUrl:"app/home/home.html",controller:"homeController"},
			"leftmenu":{templateUrl:"app/home/profile/profile-leftmenu.html"},
			"header": {templateUrl:"views/header.html"},
			"nav":{templateUrl:"views/topnav.html"}
		}
	});
});