//$scope - é utilizado para q o controller disponibilise dados para a view
//$http - serve para poder fazer uma requisicao
angular.module('alurapic').controller('FotosController', function($scope, recursoFoto) { 

	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';


	recursoFoto.query(function(fotos) {
		$scope.fotos = fotos;
	}, function(erro){
		console.log(erro);
	});


/*
	//utilizando de forma simplificada
	$http.get('v1/fotos')
	.success(function(fotos){ //se tiver sucesso no recebimento das fotos 
		$scope.fotos = fotos;
	})
	.error(function(erro){ //se nao tiver sucesso no recebimento da fotos
		console.log(erro);
	})
*/

	$scope.remover = function(foto) {
		
		recursoFoto.delete({fotoId: foto._id}, function() {
			var indeceDaFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indeceDaFoto, 1);
			$scope.mensagem = 'Foto ' + foto.titulo + 'removido com sucesso!';
		}, function(erro){
			console.log(erro);
			$scope.mensagem = 'Não foi possivel remover a foto ' + foto.titulo;
		});
	};
});
/* utilizando json

		var promise =  $http.get('v1/fotos');
	promise.then(function(retorno){
		$scope.fotos = retorno.data;
	}).catch(function(error){
		console.log(error);
	});

*/




	
	//desta forma, com o $scope os dados é add dinamicamente (sem utilizar json)	
		/*$scope.fotos = [
			{
				titulo: 'Leão',
				url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
			},
			{
				titulo: 'Leão 2',
				url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
			},
			{
				titulo: 'Leão 3',
				url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
			},
		] */
