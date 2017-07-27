angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){
	var ddo = {};


	ddo.restric = "AE";


ddo.scope = {
	titulo: '@'
};

ddo.transclude = true; //serve para manter os elementos filhos

ddo.templateUrl = 'js/directives/meu-painel.html';


	return ddo;
})
.directive('minhaFoto', function(){
	var ddo = {};

	ddo.restric = "AE";

	ddo.scope = {
		titulo: '@',
		url: '@'
	};
	ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';

	return ddo;

})
.directive('meuBotaoPerigo', function(){
	var ddo = {};
	ddo.restrict = "E";

	ddo.scope={
		
		nome: '@', // @ - é uma copia do valor - serve para passar string
		acao: '&', // & serve para passar uma expressao

	};

	ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';

	return ddo;


});

