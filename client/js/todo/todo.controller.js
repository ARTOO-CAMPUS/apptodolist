angular.module('app').controller('TodoCtrl', function ($scope, TodoSrv) {

	$scope.lista = [];
	TodoSrv.getTodos().then(function (data) {
		$scope.lista = data;
		console.log(data);
	});


});