angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');
	$urlRouterProvider.when('', '/');

	$stateProvider.state('/', {
		url: '/',
		templateUrl: '/js/todo/todo.template.html',
		controller: 'TodoCtrl'
	});
	$stateProvider.state('prova', {
		url: '/prova',
		template: '<h1>Prova</h1>',
	});
});