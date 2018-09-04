(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['items']
function ItemsController(items) {
  var itemsctrl = this;
  itemsctrl.menuItems = items.data.menu_items;
}

})();
