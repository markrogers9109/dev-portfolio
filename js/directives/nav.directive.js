angular.module('navDirective', [])

.directive('navigation', function() {
  return {
    restrict: 'E',
    templateUrl: '/dev-portfolio/templates/nav.html'
  };
});
