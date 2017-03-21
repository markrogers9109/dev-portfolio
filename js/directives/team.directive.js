angular.module('teamsDirective', [])

.directive('teamProjects', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/team-projects.html'
  };
});
