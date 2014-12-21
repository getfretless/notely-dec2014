'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginController'
  });
}])

.controller('LoginController', ['$scope', '$location', '$window', 'NotesBackend', function($scope, $location, $window, NotesBackend) {
  $scope.submit = function() {
    NotesBackend.fetchUser($scope.user, function() {
      $location.path('notes'); // sends to /#/notes
      $window.location.reload();
    });
  };
}]);
