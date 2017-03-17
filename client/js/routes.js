angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');
	$urlRouterProvider.when('', '/');

	$stateProvider.state('/', {
		url: '/',
		templateUrl: '/js/todo/todo.template.html',
		controller: 'TodoCtrl'
	});
});