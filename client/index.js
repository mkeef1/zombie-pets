(function(){
  'use strict';

  angular.module('zombie-pets', [])
  .controller('MainController', ['$scope', function($scope){
    $scope.title = 'Zombie Pets';

    $scope.weapon = {};
    $scope.weapons = [];
    $scope.pet = {health:100};
    $scope.pets = [];


    $scope.player1 = null;
    $scope.player2 = null;

    $scope.addWeapon = function(){
      $scope.weapons.push($scope.weapon);
      $scope.weapon = {};
      $('#name').focus();
    };

    $scope.addPet = function(){
      var index = $scope.pet.weapon * 1;
      $scope.pet.weapon = $scope.weapons[index];
      $scope.pets.push($scope.pet);
      $scope.pet = {health:100};

    };

    $scope.setPlayer = function(num){
      $scope['player' + num] = this.p;
    };

    $scope.toggleWeapon = function(){
      $scope.hideWeapon = !!!$scope.hideWeapon;
    };

    $scope.togglePet = function(){
      $scope.hidePet = !!!$scope.hidePet;
    };

    $scope.petHit = function(player1, player2){
      debugger;
      var damage = Math.Random() * $scope.weapon.damage;

      if(!this.isZombie){
        damage += this.health / 10;
      }

      $scope.pet.health -= damage;

      if(($scope.pet.health < 0) && !$scope.pet.isZombie){
        $scope.pet.isZombie = true;
        damage = Math.Random() * 3;
      }
    };

  }]);
})();

