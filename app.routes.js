
angular.module('portfolio')

.config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'homeAnimationCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html'
        });
});
