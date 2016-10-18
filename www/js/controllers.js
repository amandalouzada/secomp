angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
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
