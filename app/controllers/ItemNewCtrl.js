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
  $scope.items = [
    {
      id: 0,
      task: "mow the lawn",
      isCompleted: false,
      dueDate: "12/5/17",
      assignedTo: "Greg",
      location: "Joe's house",
      urgency: "low",
      dependencies: "sunshine, clippers, hat, water, headphones"
    },
    {
      id: 1,
      task: "grade quizzes",
      isCompleted: false,
      dueDate: "12/5/15",
      assignedTo: "Christina",
      location: "NSS",
      urgency: "high",
      dependencies: "wifi, tissues, vodka"
    },
    {
      id: 2,
      task: "take a nap",
      isCompleted: false,
      dueDate: "5/21/16",
      assignedTo: "Joe",
      location: "Porch of lakefront cabin",
      urgency: "medium",
      dependencies: "hammock, silence"
    }
  ];
});