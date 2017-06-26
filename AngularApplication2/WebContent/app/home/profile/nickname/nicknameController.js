angular.module("application").

controller("updateNickNamecontroller",function($scope,$http){
	$scope.updateNickName=function(){
		$http.post("setstr.do?nickname="+$scope.name).success(function(){
			alert("success");
		})
		.error(function(){
			alert("fail");
		});
	};
});