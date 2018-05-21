(function() {
'use strict';

angular.module('ShoppingListCheckOff',[])
       .controller('toBuyController', toBuyController)
       .controller('alreadyBoughtController', alreadyBoughtController)
       .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

toBuyController.$inject=['ShoppingListCheckOffService'];
function toBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getToBuyItems();
  toBuy.removeItem = function(itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
};


alreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function alreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();

};

function ShoppingListCheckOffService() {
  var service = this;
  var toBuyItems = [
   { name: "cookies",
     quantity: 10
   },
   {
     name: "apples",
     quantity: 5
   },
   {
     name: "bread",
     quantity: 1
   },
   {
     name: "cucumbers",
     quantity: 2
   },
   {
     name: "pizza",
     quantity: 3
   },
   {
     name: "bananas",
     quantity: 5
   }
  ];

  var boughtItems = [];

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };


  service.removeItem = function (itemIndex) {
    var item = toBuyItems[itemIndex];
    toBuyItems.splice(itemIndex,1);
    boughtItems.push(item);
  };

};

})();
