(function() {
'use strict';

angular.module('NarrowItDownApp',[])
       .controller('NarrowItDownController ', NarrowItDownController)
       .service('MenuSearchService', MenuSearchService)
       .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json");

NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrow = this;
  narrow.searchTerm = "";
  narrow.promise = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
  };
}

MenuSearchService.$inject=['$http','ApiBasePath'];
function MenuSearchService($http,ApiBasePath) {
  var service = this;
  service.getMatchedMenuItems = function(searchTerm) {
    return $http({
      method: "GET",
      url: ApiBasePath
    }).then(function(response) {
      var list
    });
  };
}

};
})();
