angular.module("application").controller("homeController",function($scope,$http){
	$scope.getAll = function (){
		$http.get("getStr.do")
		.success(function (data){
			$scope.mydata = data;
		})
		.error(function(){
			alert("ERROR");
		});
	};
});
