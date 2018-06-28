app.controller('pedidoController', function($scope, $http) {

  $scope.cadastrarNovoPedido = function() {

     //$scope.ticket.id = 01;

      $http({
        url:'http://35.224.128.150:8083/ticket',
        method:"POST",
        data:$scope.ticket,
        headers: {'Content-Type': 'application/json'}
      }).then(function (response) {
                // success
                alert("Chamou uma aplicação Java e fez o Pedido com sucesso!");
                $route.reload();
                console.log('success');
            }, function (response) { // optional
                // failed
                alert("Falha ao cadastrar pedido!");
                console.log('failed');
            });
  };
});
