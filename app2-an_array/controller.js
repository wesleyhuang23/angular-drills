angular.module('arrayApp').controller('arrayController', function($scope, service){
$scope.getData = function(){
  $scope.employees = service.getData();
}

$scope.getData();

});
