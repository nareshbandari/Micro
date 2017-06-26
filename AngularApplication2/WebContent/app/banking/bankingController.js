angular.module("application").
controller("bankingController",function($scope,$http){
	
	
	
	
	$scope.getServices = function (){
		
		$http.get("getListOfStr.do")
		.success(function (result){
			
			$scope.yourdata=result;
			
		})
		.error(function(){
			alert("ERROR");
		});
		
	};
	
	//$scope.yourdata=["ABC","DEC","DSDFSD"];
});
