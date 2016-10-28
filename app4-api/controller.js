angular.module('apiApp').controller('mainCtrl', function($scope, apiService){

  $scope.getShipInfo = apiService.getShipInfo().then(function(ships){
    console.log(ships);
      $scope.ships = ships;
    });

});
