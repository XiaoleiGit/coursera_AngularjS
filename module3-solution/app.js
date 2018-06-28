(function() {
'use strict';

angular.module('NarrowItDownApp',[])
       .controller('NarrowItDownController', NarrowItDownController)
       .service('MenuSearchService', MenuSearchService)
       .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json")
       .directive('foundItems', FoundItems);

function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html'
  };

  return ddo;
}

NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrow = this;
  narrow.searchTerm = "";
  narrow.found = function(searchTerm) {
    return MenuSearchService.getMatchedMenuItems(searchTerm);
  };
};


MenuSearchService.$inject=['$http','ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
    var service = this;
    service.getMatchedMenuItems = function(searchTerm) {
      return $http({
        method: "GET",
        url: ApiBasePath
      }).then(function(response) {
        var fullList = response.data["menu_items"];
        var foundItems = [];
        fullList.forEach(element => {
          if(element["description"].includes(searchTerm)) {
            foundItems.push(element);
          }
        });
        return foundItems;
      })
      .catch(function(error) {
        console.log(error);
      });

    };
  };
})();
