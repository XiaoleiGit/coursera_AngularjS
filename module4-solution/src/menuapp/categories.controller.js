(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryController', CategoryController);

CategoryController.$inject = ['categories']
function CategoryController(categories) {
  var cactrl = this;
  cactrl.categories_list = categories.data;
  cactrl.selected = {value: ""};
  console.log(cactrl.selected);
}

})();
