"use strict";

app.controller('NavCtrl', function($scope, AuthFactory) {

  let statusName = "Create Account";
  let statusUrl = "#/createuser";

  // AuthFactory.isAuthenticated().then(function(value) {
  //   statusName = "Log Out";
  //   statusUrl = "#/logout";
  // });

  $scope.navItems = [
    {
      name: "Add Item",
      url: '#/items/new'
    },
    {
      name: "All Items",
      url: '#/items/list'
    },
    {
      name: statusName,
      url: statusUrl
    }
  ];
});

