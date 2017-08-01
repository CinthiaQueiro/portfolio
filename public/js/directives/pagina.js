angular.module('portfolio')
	.directive('pagina',function($location) {
  		return {
	     	restric: "E",
			scope: {
				descricao:'@', 
				empresa: '@',
				fundo: '@',
				link:'@',
				texto:'@'
			},
			/*link: function(scope, $elm) {
		      $elm.click(function() {
		        // same as your jQuery example
		        angular.element('html,body').animate({
		          scrollTop: 0
		        }, 1000);
		      });
		    },*/
			transclude: true,
			templateUrl:'js/directives/pagina.html'
    	};
	});