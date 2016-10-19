angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('CronogramaCtrl', function($scope) {
  $scope.cronogramas= [{
      id:0,
      dia:'18/10',
      evento: [{
        palestra: 'Amanda',


        horario:'14:00 - 18:00'
      }]
  },{
      id:1,
      dia:'19/10',
      evento: [{
        palestra: 'Warley',
        horario:'14:00 - 18:00'
      },{
        palestra: 'Ary',
        horario:'18:00 - 20:00'
      }]
  }];

})

.controller('PalestranteCtrl', function($scope, $ionicPopup) {
  $scope.exibirAmanda = function() {
    $ionicPopup.alert({
      title: 'Ionic Framework',
      template: 'Minicurso ministrado no lab 15'
    });
  }
  $scope.exibirWarley = function() {
    $ionicPopup.alert({
      title: 'Minic curso do Warley',
      template: 'Minicurso ministrado no lab xyz'
    });
  }
});
