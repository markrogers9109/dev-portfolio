angular.module('teamsDirective', [])

.directive('teamProjects', function() {
  return {
    restrict: 'E',
    templateUrl: '../../views/team-projects.html'
  };
});
