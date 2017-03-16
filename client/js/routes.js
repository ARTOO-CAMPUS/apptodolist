angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');
	$urlRouterProvider.when('/', '/app');

	$stateProvider.state('/app', {
		url: '/app',
		templateUrl: '/js/todo/todo.template.html',
		controller: 'TodoCtrl'
	});
});