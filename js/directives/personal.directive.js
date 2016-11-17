angular.module('personalDirective', [])

.directive('personalProjects', function() {
  return {
    restrict: 'E',
    templateUrl: '../../views/personal-projects.html'
  };
});
