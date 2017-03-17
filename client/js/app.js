angular.module('app', [
		'ui.router',
		'ngMaterial',
	]).run(function ($rootScope) {
		console.log("app is started");
		$rootScope.currentNavItem = '/';
	})
	.config(function ($mdThemingProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('indigo')
			.accentPalette('blue')
			.warnPalette('red')
			.backgroundPalette('grey')
	});