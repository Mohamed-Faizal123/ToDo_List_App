// app.js
var app = angular.module("todoApp", []);

app.controller("todoController", function ($scope) {
  // Array to store tasks
  $scope.tasks = [];

  // Add a new task
  $scope.addTask = function () {
    if ($scope.newTask) {
      $scope.tasks.push({ name: $scope.newTask, done: false });
      $scope.newTask = ""; // Clear the input field after adding task
    }
  };

  // Delete a task
  $scope.deleteTask = function (index) {
    $scope.tasks.splice(index, 1);
  };

  // Toggle task completion
  $scope.toggleDone = function (index) {
    $scope.tasks[index].done = !$scope.tasks[index].done;
  };
});
