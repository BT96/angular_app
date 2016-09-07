(function() {
  'use strict';

  var module = angular.module('singApp.projects', [
    'ui.router'
  ]);

  module.config(appConfig);

  appConfig.$inject = ['$stateProvider'];

  function appConfig($stateProvider) {
    $stateProvider
      .state('app.projects', {
        url: '/projects',
        templateUrl: 'app/modules/projects/projects.html'
      })
  }
})();
