angular.module('personalDirective', [])

.directive('personalProjects', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/personal-projects.html'
  };
});
