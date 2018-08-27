(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryController', CategoryController);

// 'item' is injected through state's resolve
CategoryController.$inject = ['MenuDataService']
function CategoryController(MenuDataService) {
  var categories = this;
  console.log("hellollo");

  categories.promise = MenuDataService.getAllCategorie();

  categories.promise.then(function(response) {
    categories.fullList = response.data;
    console.log(categories.fullList);
  })
  .catch(function(error) {
      console.log(error);
  });

}

})();
