angular.module('app').config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');
	$urlRouterProvider.when('', '/');

	$stateProvider.state('/', {
			url: '/',
			templateUrl: '/js/todo/todo.template.html',
			controller: 'TodoCtrl'
		})
		.state('material', {
			url: '/material',
			templateUrl: '/js/todo/material.template.html',
			controller: 'TodoCtrl'
		})
});