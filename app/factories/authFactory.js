"use strict";

app.factory("AuthFactory", function() {

  let createUser = function(userObj) {
    return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password);
  };

  let loginUser = function(userObj) {
    return firebase.auth().signInWithEamilAndPassword(userObj.email, userObj.password);
  };

  let logoutUser = function() {
    return firebase.auth().signOut();
  };

  let isAuthenticated = function() {
    return new Promise ((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  };

  return {createUser, loginUser, logoutUser, isAuthenticated};

});