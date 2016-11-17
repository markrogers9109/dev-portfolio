angular.module('skillsDirective', [])

.directive('superPowers', function() {
  return {
    restrict: 'E',
    templateUrl: '../../views/skills.html'
  };
});
