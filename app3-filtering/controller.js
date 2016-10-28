angular.module('myApp').controller('mainCtrl', function($scope, service){

  $scope.employees = service.getData();

});
