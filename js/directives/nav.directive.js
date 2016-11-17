angular.module('navDirective', [])

.directive('navigation', function() {
  return {
    restrict: 'E',
    templateUrl: '../../templates/nav.html'
  };
});
