angular.module('portfolio')
	.controller('jobs', function($scope){
		$scope.paginas = [
			{
				descricao: 'Projetos Internos Paradigm Language Support', 
				empresa: 'PARADIGM LANGUAGE SUPPORT',
				fundo: 'paradigm.png',
				link:'agenda',
				texto:'A Paradigm é uma Consultoria de Idiomas conceituada no mercado. Lá comecei a minha carreira como estagiária construindo projetos internos e mantendo projetos existentes da empresa.'
			},
            

			{
				descricao: 'Projeto Contém1g', 
				empresa: 'PARADIGM LANGUAGE SUPPORT',
				fundo: 'contem1g.png',
				link: 'contem1g',
				texto: 'Na Contém1g atuei no desenvolvimento de diversas páginas, por exemplo Seja uma Consultora.'
			},

			{
				descricao: 'Projeto Olympikus Mobile', 
				empresa: 'InfraCommerce',
				fundo: 'olympikus.gif',
				link: 'olympikus',
				texto: 'Desenvolvimento mobile da Olympikus.'
			},

			{
				descricao: 'Projeto Morena Rosa', 
				empresa: 'InfraCommerce',
				fundo: 'morenaRosa.gif',
				link: 'morenaRosa',
				texto: 'Desenvolvimento da página principal da Morena Rosa'
            },

            {
                descricao: 'Projetos Olympikus, Carrefour',
                empresa: 'LIQ',
                fundo: 'liq.png',
                link: 'liq',
                texto: 'Análise de Sistemas, Desenvolvimento e Manutenção de projetos de empresas como Olympikus, Carrefour entre outras.'
            },

            {
                descricao: 'Projetos Vivo, Unidas, Oi, Quinto Andar, XP',
                empresa: 'Atento',
                fundo: 'atento.png',
                link: 'atento',
                texto: 'Desenvolvimento de projetos, Análise de Sistemas e Gerenciamento para grandes empresas como Vivo, Unidas, Oi, Quinto Andar, XP, Bradesco, etc.'
            }
		];
	});	