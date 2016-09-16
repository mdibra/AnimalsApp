var animals = angular.module('animals', []);

animals.controller('animalsController', ['$scope', '$http', function($scope, $http){
	
	$http.get('http://api-nghyf.rhcloud.com/animals/all').success(function(data){
		
		$scope.animals = data;
		
	});
	
}]);

