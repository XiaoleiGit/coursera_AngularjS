(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('loves',LovesFilter);

MsgController.$inject = ['$scope','$filter','lovesFilter'];
function MsgController($scope,$filter,lovesFilter) {
  $scope.name = "Van Gogh";
  $scope.stateOfBeing = "Starry_night";
  $scope.paintCost = 450;

  $scope.sayMessage = function () {
    var msg = "I like the Starry_night!";
    return msg;
  };

  $scope.sayLovesMessage = function () {
    var msg = "I like the Starry_night!";
    msg = lovesFilter(msg);
    return msg;
  };

  $scope.changeImg = function () {
    $scope.stateOfBeing = "la-nuit";
  };
}

function LovesFilter() {
  return function (input) {
    input = input || "";
    input = input.replace("like","love");
    return input;
  };
}

})();
