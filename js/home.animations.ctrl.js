'use strict';

angular.module('portfolio')
    .controller('homeAnimationCtrl', function($scope, $rootScope) {

        $scope.showNav = false;
        $rootScope.slide = 0;
        $scope.selectProject = selectProject;
        var skills = jQuery('#skills');

        $scope.toggleSlideNav = (i) => {
            if(!i){
                $rootScope.slide = 0;
            } else {
                $scope.selectProject(i);
            }

            if ($scope.showNav === false) {
                $scope.showNav = true;
                jQuery(function() {
                    jQuery('a[href*="#"]:not([href="#"])').mouseup(function() {
                        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                            var target = jQuery(this.hash);
                            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                            if (target.length) {
                                jQuery('html, body').animate({
                                    scrollTop: target.offset().top
                                }, 300);
                                return false;
                            }
                        }
                    });
                });
            } else if ($scope.showNav === true) {
                $scope.showNav = false;
            }
        }

        $scope.toggleNav = () => {

            if ($scope.showNav === false) {
                $scope.showNav = true;
                jQuery(function() {
                    jQuery('a[href*="#"]:not([href="#"])').mouseup(function() {
                        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                            var target = jQuery(this.hash);
                            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                            if (target.length) {
                                jQuery('html, body').animate({
                                    scrollTop: target.offset().top
                                }, 500);
                                return false;
                            }
                        }
                    });
                });
            } else if ($scope.showNav === true) {
                $scope.showNav = false;
            }
        }

        function selectProject(i) {
            if ($rootScope.slide == i) {
                $rootScope.slide = 0;
            } else {
                $rootScope.slide = i;
            }
        }

    });
