(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  .state('category', {
    url: '/category',
    templateUrl: 'src/menuapp/templates/categories.template.html',
    controller: 'CategoryController as cactrl',
    resolve: {
      categories: ['MenuDataService', function(MenuDataService) {
        return MenuDataService.getAllCategorie();
      }]
    }
  })

  .state('items', {
    url: '/items',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'ItemsController as itemsctrl',
    resolve: {
      items: ['MenuDataService', function(MenuDataService) {
        return MenuDataService.getItemsForCategory("A");
      }]
    }
  })

}

})();
