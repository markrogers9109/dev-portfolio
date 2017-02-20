angular.module('projectsDirective', [])

.directive('projects', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/projects.html'
  };
});
