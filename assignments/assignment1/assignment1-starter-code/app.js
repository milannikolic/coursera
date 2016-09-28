(function () {
'use strict';

angular.module('assApp', [])
.controller('spltCtlr', spltCtlr);

spltCtlr.$inject = ['$scope'];
function spltCtlr($scope) {
  $scope.itemsString = "";
  $scope.messageText = "";

  $scope.checkIt = function () {
    var items = $scope.itemsString.split(',');
    console.log(items);
    console.log(items.length);
    $scope.messageText = (items.length>3?"Too much":"Enjoy!");
  };
}

})();
