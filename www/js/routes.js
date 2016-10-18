angular.module('starter.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.inicio', {
    url: '/inicio',
    views: {
      'menuContent': {
        templateUrl: 'templates/inicio.html'
      }
    }
  })

  .state('app.palestrante', {
    url: '/palestrante',
    views: {
      'menuContent': {
        templateUrl: 'templates/palestrante.html',
        controller: 'PalestranteCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/inicio');
});
