angular.module("application").
controller("profilecontroller",function($scope,$http){
	$scope.obj={};
	$http.get("getprofile.do")
	.success(function(data){
		$scope.std=data;
	})
	.error(function(){});
	$scope.setobj=function(){
		alert("set object..........");
		$http.post("setObj.do",$scope.obj);
	};
});
