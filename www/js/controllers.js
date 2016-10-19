  angular.module('starter.controllers', [])

  .controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  })

  .controller('CronogramaCtrl', function($scope) {
    $scope.dia=0;
    $scope.cronogramas= [{
        id:0,
        dia:'18/10',
        evento: [{
          palestra: 'Ionic Framework',


          horario:'14:00 - 18:00'
        },{
            palestra: 'Haxes Multiliguagem',


            horario:'14:00 - 18:00'
          }],
    },{
        id:1,
        dia:'19/10',
        evento: [{
          palestra: 'Estrutura de Dados',
          horario:'14:00'
        },{
          palestra: 'Mineração de dados',
          horario:'16:00'
        },{
          palestra: 'Patrick Leitouze',
          horario:'18:00'
        }],
      },{
          id:2,
          dia:'20/10',
          evento: [{
            palestra: 'Redes',
            horario:'14:00'
          },{
            palestra: 'SIG',
            horario:'16:00'
          },{
            palestra: 'Ionic Framework',
            horario:'18:00'
          }]
    }];



    $scope.definirDia = function(id){
      $scope.dia = id;
    }

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
