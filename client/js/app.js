angular.module('app', [
		'ui.router',
		'ngMaterial',
	]).run(function () {
		console.log("app is started");
	})
	.config(function ($mdThemingProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('indigo')
			.accentPalette('green')
			.warnPalette('red')
			.backgroundPalette('grey');
	});