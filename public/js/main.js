angular.module('portfolio',['ngRoute', 'ngAnimate','ui.bootstrap'])
	.config(function($routeProvider, $locationProvider){
		//para hão ter que usar a tralha no endereço http
		$locationProvider.html5Mode(true);

		$routeProvider.when('/principal', {
			templateUrl: 'partials/principal.html'	
		});

		$routeProvider.when('/principal/project/:idPage', {
			templateUrl: 'partials/projeto.html',
			controller: 'infoJobs'
		});		
		
		$routeProvider.otherwise({redirectTo: '/principal'});

	});
	
	