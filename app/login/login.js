'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginController'
  });
}])

.controller('LoginController', ['$scope', '$location', '$window', 'NotesBackend', function($scope, $location, $window, NotesBackend) {
  $scope.error = '';

  $scope.submit = function() {
    NotesBackend.fetchUser($scope.user, function(userData) {
      if (userData.id) {
        $location.path('notes'); // sends to /#/notes
        $window.location.reload();  // reload to invoke NotesController
      }
      else {
        $scope.error = userData.error;
        $user.password = ''; // blank password field
      }
    });
  };
}]);
