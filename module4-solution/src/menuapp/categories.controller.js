(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryController', CategoryController);

// 'item' is injected through state's resolve
CategoryController.$inject = ['categories']
function CategoryController(categories) {
  var cactrl = this;
  console.log("hellollo");
  console.log(categories);
  cactrl.categories_list = categories.data;
  console.log(cactrl.categories_list);


}

})();
