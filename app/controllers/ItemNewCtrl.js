"use strict";

app.controller('ItemNewCtrl', function($scope, $window, ItemStorage) {
  $scope.newTask = {};
  $scope.addNewItem = function(){
    $scope.newTask.isCompleted = false;
    $scope.newTask.id = $scope.items.length;
    ItemStorage.postNewItem($scope.newTask);
    $scope.newTask = {}; // clear newTask Form
    $window.location.href = '/#/items/list'; // send user to list view if they add new task
  };
});