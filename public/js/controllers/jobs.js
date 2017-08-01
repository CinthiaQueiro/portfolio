angular.module('portfolio')
	.controller('jobs', function($scope){
		$scope.paginas = [
			{
				descricao: 'Projeto Agenda de Entrevistas', 
				empresa: 'PARADIGM LANGUAGE SUPPORT',
				fundo: 'agenda_entrevistas.png',
				link:'agenda',
				texto:'A agenda de entrevistas é uma página que proporciona que os próprios candidatos escolham o horário para realizar a sua entrevista e realizem o agendamento da mesma. Para isso a página tem atualização das informações de maneira dinâmica, enquanto um participante escolhe um horário no seu notebook por exemplo, automaticamente esse horário deixa de existir para um outro participante em outro computador. Essas atualizações são feitas com ajuda do banco de dados e de requisições ao servidor. Os totais, as avaliações e outras informações são atualizadas em tempo real também.'
			},

			{
				descricao: 'Projeto Recursos', 
				empresa: 'PARADIGM LANGUAGE SUPPORT',
				fundo: 'recursos.png',
				link:'recursos',
				texto:'A página de recursos possibilita a visualização edição e exclusão de recursos que são disponibilizados pelos consultores aos entrevistados conforme o seu nível de aprendizado na linguagem avaliada.'
			},

			{
				descricao: 'Projeto Setup', 
				empresa: 'PARADIGM LANGUAGE SUPPORT',
				fundo: 'setup.png',
				link:'setup',
				texto: 'O setup é a parte macro do sistema Paradigm, através dele são setados todos os parâmetros necessários contidos em avaliações, gestões de candidatos, etc. Com esses valores setados, as páginas que cuidam da inclusão de novas avaliações e gestões, assim que tem um novo valor incluso obedecem o que é estabelecido como setup para a empresa em questão.Isso evita que existam erros no momento de inclusões, como por exemplo uma nova avaliação com idioma errado.'
			},

			{
				descricao: 'Projeto Participantes', 
				empresa: 'PARADIGM LANGUAGE SUPPORT',
				fundo: 'participantes.png',
				link:'participantes',
				texto: 'A página de participantes cuida da inclusão, edição e exclusão de participantes das empresas associadas a Paradigm.'+
      					'A partir dela é possível realizar a visualização de avaliações realizadas pelo candidato, gestão e setar outros fatores ligados diretamente a ele.'
			},

			{
				descricao: 'Projeto Acompanhamento', 
				empresa: 'PARADIGM LANGUAGE SUPPORT',
				fundo: 'acompanhamento.png',
				link:'acompanhamento',
				texto: 'A página de acompanhamento é utilizada para acompanhar o andamento de um participante que está em uma determinada gestão. A empresa em que o participante atua paga uma escola de idiomas e nessa escola são preenchidas informações mensais atráves do sistema que servem para alavancar o nível em que o candidato se encontra e tomar as medidas necessárias.'
			},

			{
				descricao: 'Projeto Lotes', 
				empresa: 'PARADIGM LANGUAGE SUPPORT',
				fundo: 'lotes.png',
				link: 'lotes',
				texto: 'Os lotes são inseridos para que o sistema crie um job que automaticamente insira a quantidade de avaliações existentes nele no sistema.'
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
			}	
		];
	});	