angular.module('portfolio')
	.directive('cabecalho',function() {
  		return {
	     	restric: "E",
			transclude: true,
			templateUrl:'js/directives/cabecalho.html'
    	};
	});



