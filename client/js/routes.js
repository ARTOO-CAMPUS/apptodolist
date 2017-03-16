angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

	$stateProvider.state('test', {
		url: '/test',
		templateUrl: 'todo/todo.template.html',
		controller: 'TodoCtrl'
	});
});