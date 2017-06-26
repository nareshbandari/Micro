angular.module("application")
.controller("creditcardController",function($scope,$http){
	  
	
	
	$scope.getProducts=function (){
		
		$http.get("getListOfObjs.do")
		.success(function (data){
			$scope.data=data;
		})
		.error(function(){});
		
	};
	
	  
});
