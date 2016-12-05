"use strict";

app.controller('CreateUserCtrl', function($scope, AuthFactory) {

$scope.userObj = {};

$scope.createNewUser = function() {
  AuthFactory.createUser($scope.userObj);
};

});