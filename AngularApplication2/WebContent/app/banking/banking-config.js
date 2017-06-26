
angular.module("application")
.config(function($stateProvider,$urlRouterProvider){
$stateProvider.state("banking",{
		url:"/banking",
		views:{
			"body":{templateUrl:"app/banking/banking.html",controller:"bankingController"},
			"leftmenu":{templateUrl:"app/banking/banking-leftmenu.html"},
			"header": {templateUrl:"views/header.html"},
			"nav":{templateUrl:"views/topnav.html"}
		}
	});
});  