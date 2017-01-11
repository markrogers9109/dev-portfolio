'use strict';

angular.module('portfolio')
    .controller('homeAnimationCtrl', function($scope) {

        $scope.showNav = false;
        $scope.slide = 0;
        $scope.selectProject = selectProject;
        $scope.checkSlide = checkSlide;
        var skills = jQuery('#skills');

        $scope.toggleNav = (i) => {
            console.log('toggleNav');
            if(!i){
                $scope.slide = 0;
            } else {
                $scope.selectProject(i);
                console.log(i, 'else');
                console.log($scope.slide, 'slide');
            }

            if ($scope.showNav === false) {
                $scope.showNav = true;
                console.log($scope.slide, 'slide');
                jQuery(function() {
                    jQuery('a[href*="#"]:not([href="#"])').mouseup(function() {
                        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                            var target = jQuery(this.hash);
                            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
                            if (target.length) {
                                jQuery('html, body').animate({
                                    scrollTop: target.offset().top
                                }, 1000);
                                return false;
                            }
                        }
                    });
                });
            } else if ($scope.showNav === true) {
                console.log($scope.slide, 'slide');
                $scope.showNav = false;
            }
        }

        function selectProject(i) {
            console.log('selectProject');
            console.log(i, 'select project');
            if ($scope.slide == i) {
                $scope.slide = 0;
            } else {
                $scope.slide = i;
                console.log($scope.slide, 'slide');
            }
        }
        function checkSlide(i) {
            console.log('checkSlide');
            console.log($scope.slide, 'slide');
            console.log($scope.slide == i, 'is equal');
            return($scope.slide == i);
        }
    });
