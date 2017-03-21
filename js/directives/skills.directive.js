angular.module('skillsDirective', [])

.directive('superPowers', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/skills.html',
    controller: 'homeAnimationCtrl'
  };
});
