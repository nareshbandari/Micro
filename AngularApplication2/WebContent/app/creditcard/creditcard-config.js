angular.module("application").
config(function($stateProvider,$urlRouterProvider){
$stateProvider.state("creditcard",{
	url:"/creditcard",
	views:{
		"body":{ templateUrl:"app/creditcard/creditcard.html", controller:"creditcardController" },
		"leftmenu":{templateUrl:"app/creditcard/creditcard-leftmenu.html" },
		"header":{templateUrl:"views/header.html" },
		"nav":{templateUrl:"views/topnav.html" }
	}
	});
});