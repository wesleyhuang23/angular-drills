angular.module('apiApp').service('apiService', function($http){

var baseUrl ="http://swapi.co/api";

this.getShipInfo = function(){
  return $http({
    method: 'GET',
    url: baseUrl + "/starships/"
  }).then(function(response){
    console.log(response.data.results);
    if(response.status === 200){
    return response.data.results;
  }
  return "The death star blew up our request";
  });
};

});
