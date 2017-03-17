angular.module('app').service('TodoSrv', function ($http) {

	const PORT = 3000;
	var getTodos = function () {

		return $http({
				method: 'GET',
				url: 'http://localhost:' + PORT + '/api/todolist'
			})
			.then(function (res) {
				return res.data;
			}, function (err) {
				
			})
			.catch(function (err) {
				return err;
			});
	}

	return {
		getTodos: getTodos
	}
});