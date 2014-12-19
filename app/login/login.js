'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginController'
  });
}])

.controller('LoginController', ['$scope', '$location', 'NotesBackend', function($scope, $location, NotesBackend) {
  $scope.submit = function() {
    NotesBackend.fetchUser($scope.user, function() {
      // NotesBackend.fetchNotes();
      $location.path('notes'); // sends to /#/notes
    });
  };
}]);
