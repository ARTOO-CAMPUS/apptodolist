angular.module('app').controller('TodoCtrl', function ($scope, TodoSrv, $mdDialog) {

	$scope.lista = [];
	TodoSrv.getTodos().then(function (data) {
		$scope.lista = data;
		$scope.lista.forEach(function (el) {
			el.data = new Date(el.data);
		});
	});

	$scope.crea = function () {
		TodoSrv.creaTodo($scope.nuovo)
			.then(function (data) {
				$scope.nuovo = {};
				return TodoSrv.getTodos()
			}).then(function (data) {
				$scope.lista = data;
				$scope.lista.forEach(function (el) {
					el.data = new Date(el.data);
				});
			})
	}

	$scope.elimina = function (id) {
		TodoSrv.deleteTodo(id)
			.then(function (data) {
				return TodoSrv.getTodos()
			}).then(function (data) {

				$scope.lista = data;
				$scope.lista.forEach(function (el) {
					el.data = new Date(el.data);
				});
			});
	}

	$scope.update = function (id, fatto) {
		console.log(id, fatto);
		TodoSrv.updateTodo(id, fatto)
			.then(function (data) {
				return TodoSrv.getTodos()
			}).then(function (data) {
				$scope.lista = data;
				$scope.lista.forEach(function (el) {
					el.data = new Date(el.data);
				});
			})
	}

	$scope.showPrompt = function (ev) {
		// Appending dialog to document.body to cover sidenav in docs app
		var confirm = $mdDialog.prompt()
			.title('Cosa vuoi fare oggi?')
			.textContent('Decidi cosa vuoi fare')
			.placeholder('Proprio niente')
			.ariaLabel('Booh')
			.initialValue('Proprio niente')
			.targetEvent(ev)
			.ok('Okay!')
			.cancel('Ci ho ripensato');

		$mdDialog.show(confirm)
			.then(function (result) {
				var nuovo = {};
				nuovo.titolo = result;
				nuovo.descrizione = "sono pigro";
				nuovo.data = new Date();
				return TodoSrv.creaTodo(nuovo)
			}, function () {
				$scope.status = 'You didn\'t name your dog.';
			})
			.then(function (data) {
				$scope.nuovo = {};
				return TodoSrv.getTodos()
			})
			.then(function (data) {
				$scope.lista = data;
				$scope.lista.forEach(function (el) {
					el.data = new Date(el.data);
				});
			})
	};



});