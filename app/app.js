"use strict";

let app = angular.module("TodoApp", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider
  .when('/items/list', {
    templateUrl: 'partials/item-list.html',
    controller: 'ItemListCtrl'
  })
  .when('/items/new', {
    templateUrl: 'partials/item-form.html',
    controller: 'ItemNewCtrl'
  })
  .when('/items/details', {
    templateUrl: 'partials/item-details.html',
    controller: 'ItemViewCtrl'
  })
  .when('/createuser', {
    templateUrl: 'partials/create-user.html',
    controller: 'CreateUserCtrl'
  })
  .otherwise('/items/list');
});

// Grab the Auth Factory
let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
  AuthFactory.isAuthenticated().then((userExists) => {
    if(userExists) {
      resolve();
    } else {
      reject();
    }
  });
});

app.run( ($location, FBCreds) => {
  let authConfig = {
    apiKey: FBCreds.key,
    authDomain: FBCreds.authDomain
  };
  firebase.initializeApp(authConfig);
});