angular.module("application").
config(function($stateProvider,$urlRouterProvider){
	$stateProvider.state("updatepanno",{
   	url:"/updatepanno",
   	views:{
   		"body":{templateUrl:"app/home/profile/panno/updatepanno.html",controller:"updatepannocontroller"},
   		"leftmenu":{templateUrl:"app/home/profile/profile-leftmenu.html" },
			"header":{templateUrl:"views/header.html" },
			"nav":{templateUrl:"views/topnav.html" }
   	}
    });


});
