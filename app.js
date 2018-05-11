(function () {
'use strict';

angular.module('myFirstApp', [])
       .controller('myFirstController', myFirstController);


function myFirstController($scope) {
  $scope.name = 'Xiaolei';
  $scope.totalValue = 0;
  $scope.displayNumeric = displayNumeric;

  function displayNumeric() {
    var totalNameValue = calculateNumericForString($scope.name);
    $scope.totalValue = totalNameValue;
  }

  function calculateNumericForString(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }

    return totalStringValue;
  }

}

})();
