angular.module('app').controller('MaterialCtrl', function ($scope) {

	$scope.crea = function () {
		console.log($scope.nuovo)
	}

	$scope.currentNavItem = 'crea';


});