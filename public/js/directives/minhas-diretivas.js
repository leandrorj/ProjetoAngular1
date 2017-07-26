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
});