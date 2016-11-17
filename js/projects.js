
jQuery('.projects-columns').ready(function() {

    var $ = jQuery;
    console.log('here');
    // var addActive = jQuery('.add-active');
    var one = $('.projects-column_one'),
        two = $('.projects-column_two'),
        three = $('.projects-column_three'),
        team = $('#team-projects'),
        personal = $('#personal-projects'),
        skills = $('#super-powers');

    if ($(window).width() <= 991){
        one.click(function() {
            console.log('hereOne');
            if (one.hasClass('active')) {
                two.removeClass('not-active');
                three.removeClass('not-active');
                one.removeClass('active');
                personal.css({'display': 'none', 'transition': '0.3s'});
                team.css({'display': 'none', 'transition': '0.3s'});
                skills.css({'display': 'none', 'transition': '0.3s'});
            } else {
                two.removeClass('active').addClass('not-active');
                three.removeClass('active').addClass('not-active');
                one.removeClass('not-active').addClass('active');
                personal.css({'display': 'none', 'transition': '0.3s'});
                team.css({'display': 'none', 'transition': '0.3s'});
                skills.css({'display': 'inline-block', 'transition': '0.3s'}).focus();

            }
        });

        two.click(function() {
            if (two.hasClass('active')) {
                one.removeClass('not-active');
                three.removeClass('not-active');
                two.removeClass('active');
                personal.css({'display': 'none', 'transition': '0.3s'});
                team.css({'display': 'none', 'transition': '0.3s'});
                skills.css({'display': 'none', 'transition': '0.3s'});
            } else {
                one.removeClass('active').addClass('not-active');
                three.removeClass('active').addClass('not-active');
                two.removeClass('not-active').addClass('active');
                personal.css({'display': 'inline-block', 'transition': '0.3s'}).focus();
                team.css({'display': 'none', 'transition': '0.3s'});
                skills.css({'display': 'none', 'transition': '0.3s'});
            }
        });

        three.click(function() {
            if (three.hasClass('active')) {
                one.removeClass('not-active');
                two.removeClass('not-active');
                three.removeClass('active');
                personal.css({'display': 'none', 'transition': '0.3s'});
                team.css({'display': 'none', 'transition': '0.3s'});
                skills.css({'display': 'none', 'transition': '0.3s'});
            } else {
                one.removeClass('active').addClass('not-active');
                two.removeClass('active').addClass('not-active');
                three.removeClass('not-active').addClass('active');
                personal.css({'display': 'none', 'transition': '0.3s'});
                team.css({'display': 'inline-block', 'transition': '0.3s'}).focus();
                skills.css({'display': 'none', 'transition': '0.3s'});
            }
        });
    } else {
        one.click(function() {
            if (one.hasClass('active')) {
                two.removeClass('not-active').css('float', 'left');
                three.removeClass('not-active').css('float', 'left');
                one.removeClass('active');
                personal.css({'display': 'none', 'transition': '0.3s'});
                team.css({'display': 'none', 'transition': '0.3s'});
                skills.css({'display': 'none', 'transition': '0.3s'});
            } else {
                two.removeClass('active').addClass('not-active').css('float', 'right');
                three.removeClass('active').addClass('not-active').css('float', 'right');
                one.removeClass('not-active').addClass('active');
                personal.css({'display': 'none', 'transition': '0.3s'});
                team.css({'display': 'none', 'transition': '0.3s'});
                skills.css({'display': 'inline-block', 'width': '70%', 'transition': 'width .3s'});

            }
        });

        two.click(function() {
            if (two.hasClass('active')) {
                one.removeClass('not-active');
                three.removeClass('not-active').css('float', 'left');
                two.removeClass('active').css('float', 'left');
                personal.css({'display': 'none', 'transition': '0.3s'});
                team.css({'display': 'none', 'transition': '0.3s'});
                skills.css({'display': 'none', 'transition': '0.3s'});
            } else {
                one.removeClass('active').addClass('not-active');
                three.removeClass('active').addClass('not-active').css('float', 'right');
                two.removeClass('not-active').addClass('active').css('float', 'left');
                personal.css({'display': 'inline-block', 'width': '70%', 'transition': 'width .3s'});
                team.css({'display': 'none', 'transition': '0.3s'});
                skills.css({'display': 'none', 'transition': '0.3s'});
            }
        });

        three.click(function() {
            if (three.hasClass('active')) {
                one.removeClass('not-active');
                two.removeClass('not-active').css('float', 'left');
                three.removeClass('active').css('float', 'left');
                personal.css({'display': 'none', 'transition': '0.3s'});
                team.css({'display': 'none', 'transition': '0.3s'});
                skills.css({'display': 'none', 'transition': '0.3s'});
            } else {
                one.removeClass('active').addClass('not-active');
                two.removeClass('active').addClass('not-active').css('float', 'left');
                three.removeClass('not-active').addClass('active').css('float', 'left');
                personal.css({'display': 'none', 'transition': '0.3s'});
                team.css({'display': 'inline-block', 'width': '70%', 'transition': 'width .3s'});
                skills.css({'display': 'none', 'transition': '0.3s'});
            }
        });
    }
});

angular.module('homeAnimation', [])

    .controller('homeAnimationCtrl', function($scope) {

        $scope.oneSlide = oneSlide;
        // vm.navSkillsSlide = navSkillsSlide;
        $scope.twoSlide = twoSlide;
        // vm.navPersonalSlide = navPersonalSlide;
        $scope.threeSlide = threeSlide;
        // vm.navTeamSlide = navTeamSlide;

            var $ = jQuery;

            // var addActive = jQuery('.add-active');
            var one = $('.projects-column_one'),
                two = $('.projects-column_two'),
                three = $('.projects-column_three'),
                team = $('#team-projects'),
                personal = $('#personal-projects'),
                skills = $('#super-powers');
                navTeam = $('.team');
                navPersonal = $('.personal');
                navSkills = $('.skills');

                function oneSlide() {
                    // console.log(one);
                    if (one.hasClass('active')) {
                        two.removeClass('not-active').css('float', 'left');
                        three.removeClass('not-active').css('float', 'left');
                        one.removeClass('active');
                        personal.css({'display': 'none', 'transition': '0.2s'});
                        team.css({'display': 'none', 'transition': '0.2s'});
                        skills.css({'display': 'none', 'transition': '0.2s'});
                    } else {
                        two.removeClass('active').addClass('not-active').css('float', 'right');
                        three.removeClass('active').addClass('not-active').css('float', 'right');
                        one.removeClass('not-active').addClass('active');
                        personal.css({'display': 'none', 'transition': '0.2s'});
                        team.css({'display': 'none', 'transition': '0.2s'});
                        skills.css({'display': 'inline-block', 'width': '70%', 'transition': 'width .3s'});

                    }
                };

            if ($(window).width() <= 991){
                // function oneSlide() {
                //     console.log("one slide");
                //     if (one.hasClass('active')) {
                //         two.removeClass('not-active');
                //         three.removeClass('not-active');
                //         one.removeClass('active');
                //         personal.css({'display': 'none', 'transition': '0.2s'});
                //         team.css({'display': 'none', 'transition': '0.2s'});
                //         skills.css({'display': 'none', 'transition': '0.2s'});
                //     } else {
                //         two.removeClass('active').addClass('not-active');
                //         three.removeClass('active').addClass('not-active');
                //         one.removeClass('not-active').addClass('active');
                //         personal.css({'display': 'none', 'transition': '0.2s'});
                //         team.css({'display': 'none', 'transition': '0.2s'});
                //         skills.css({'display': 'inline-block', 'transition': '0.2s'}).focus();
                //
                //     }
                // };

                // function navSkillsSlide() {
                //     if (one.hasClass('active')) {
                //         two.removeClass('not-active');
                //         three.removeClass('not-active');
                //         one.removeClass('active');
                //         personal.css({'display': 'none', 'transition': '0.2s'});
                //         team.css({'display': 'none', 'transition': '0.2s'});
                //         skills.css({'display': 'none', 'transition': '0.2s'});
                //     } else {
                //         two.removeClass('active').addClass('not-active');
                //         three.removeClass('active').addClass('not-active');
                //         one.removeClass('not-active').addClass('active');
                //         personal.css({'display': 'none', 'transition': '0.2s'});
                //         team.css({'display': 'none', 'transition': '0.2s'});
                //         skills.css({'display': 'inline-block', 'transition': '0.2s'}).focus();
                //
                //     }
                // };

                function twoSlide() {
                    console.log("two slide");
                    if (two.hasClass('active')) {
                        one.removeClass('not-active');
                        three.removeClass('not-active');
                        two.removeClass('active');
                        personal.css({'display': 'none', 'transition': '0.2s'});
                        team.css({'display': 'none', 'transition': '0.2s'});
                        skills.css({'display': 'none', 'transition': '0.2s'});
                    } else {
                        one.removeClass('active').addClass('not-active');
                        three.removeClass('active').addClass('not-active');
                        two.removeClass('not-active').addClass('active');
                        personal.css({'display': 'inline-block', 'transition': '0.2s'}).focus();
                        team.css({'display': 'none', 'transition': '0.2s'});
                        skills.css({'display': 'none', 'transition': '0.2s'});
                    }
                };

                // function navPersonalSlide() {
                //     navPersonal.click(function() {
                //         if (two.hasClass('active')) {
                //             one.removeClass('not-active');
                //             three.removeClass('not-active');
                //             two.removeClass('active');
                //             personal.css({'display': 'none', 'transition': '0.2s'});
                //             team.css({'display': 'none', 'transition': '0.2s'});
                //             skills.css({'display': 'none', 'transition': '0.2s'});
                //         } else {
                //             one.removeClass('active').addClass('not-active');
                //             three.removeClass('active').addClass('not-active');
                //             two.removeClass('not-active').addClass('active');
                //             personal.css({'display': 'inline-block', 'transition': '0.2s'}).focus();
                //             team.css({'display': 'none', 'transition': '0.2s'});
                //             skills.css({'display': 'none', 'transition': '0.2s'});
                //         }
                //     });
                // };

                function threeSlide() {
                    console.log("three slide");
                    if (three.hasClass('active')) {
                        one.removeClass('not-active');
                        two.removeClass('not-active');
                        three.removeClass('active');
                        personal.css({'display': 'none', 'transition': '0.2s'});
                        team.css({'display': 'none', 'transition': '0.2s'});
                        skills.css({'display': 'none', 'transition': '0.2s'});
                    } else {
                        one.removeClass('active').addClass('not-active');
                        two.removeClass('active').addClass('not-active');
                        three.removeClass('not-active').addClass('active');
                        personal.css({'display': 'none', 'transition': '0.2s'});
                        team.css({'display': 'inline-block', 'transition': '0.2s'}).focus();
                        skills.css({'display': 'none', 'transition': '0.2s'});
                    }
                };

                // navTeam.click(function() {
                //     if (three.hasClass('active')) {
                //         one.removeClass('not-active');
                //         two.removeClass('not-active');
                //         three.removeClass('active');
                //         personal.css({'display': 'none', 'transition': '0.2s'});
                //         team.css({'display': 'none', 'transition': '0.2s'});
                //         skills.css({'display': 'none', 'transition': '0.2s'});
                //     } else {
                //         one.removeClass('active').addClass('not-active');
                //         two.removeClass('active').addClass('not-active');
                //         three.removeClass('not-active').addClass('active');
                //         personal.css({'display': 'none', 'transition': '0.2s'});
                //         team.css({'display': 'inline-block', 'transition': '0.2s'}).focus();
                //         skills.css({'display': 'none', 'transition': '0.2s'});
                //     }
                // });

            } else {
                // function oneSlide() {
                //     console.log("one slide");
                //     if (one.hasClass('active')) {
                //         two.removeClass('not-active').css('float', 'left');
                //         three.removeClass('not-active').css('float', 'left');
                //         one.removeClass('active');
                //         personal.css({'display': 'none', 'transition': '0.2s'});
                //         team.css({'display': 'none', 'transition': '0.2s'});
                //         skills.css({'display': 'none', 'transition': '0.2s'});
                //     } else {
                //         two.removeClass('active').addClass('not-active').css('float', 'right');
                //         three.removeClass('active').addClass('not-active').css('float', 'right');
                //         one.removeClass('not-active').addClass('active');
                //         personal.css({'display': 'none', 'transition': '0.2s'});
                //         team.css({'display': 'none', 'transition': '0.2s'});
                //         skills.css({'display': 'inline-block', 'width': '70%', 'transition': 'width .3s'});
                //
                //     }
                // };

                // navSkills.click(function() {
                //     if (one.hasClass('active')) {
                //         two.removeClass('not-active').css('float', 'left');
                //         three.removeClass('not-active').css('float', 'left');
                //         one.removeClass('active');
                //         personal.css({'display': 'none', 'transition': '0.2s'});
                //         team.css({'display': 'none', 'transition': '0.2s'});
                //         skills.css({'display': 'none', 'transition': '0.2s'});
                //     } else {
                //         two.removeClass('active').addClass('not-active').css('float', 'right');
                //         three.removeClass('active').addClass('not-active').css('float', 'right');
                //         one.removeClass('not-active').addClass('active');
                //         personal.css({'display': 'none', 'transition': '0.2s'});
                //         team.css({'display': 'none', 'transition': '0.2s'});
                //         skills.css({'display': 'inline-block', 'width': '70%', 'transition': 'width .3s'});
                //
                //     }
                // });

                function twoSlide() {
                    console.log("two slide");
                    if (two.hasClass('active')) {
                        one.removeClass('not-active');
                        three.removeClass('not-active').css('float', 'left');
                        two.removeClass('active').css('float', 'left');
                        personal.css({'display': 'none', 'transition': '0.2s'});
                        team.css({'display': 'none', 'transition': '0.2s'});
                        skills.css({'display': 'none', 'transition': '0.2s'});
                    } else {
                        one.removeClass('active').addClass('not-active');
                        three.removeClass('active').addClass('not-active').css('float', 'right');
                        two.removeClass('not-active').addClass('active').css('float', 'left');
                        personal.css({'display': 'inline-block', 'width': '70%', 'transition': 'width .3s'});
                        team.css({'display': 'none', 'transition': '0.2s'});
                        skills.css({'display': 'none', 'transition': '0.2s'});
                    }
                };

                // navPersonal.click(function() {
                //     if (two.hasClass('active')) {
                //         one.removeClass('not-active');
                //         three.removeClass('not-active').css('float', 'left');
                //         two.removeClass('active').css('float', 'left');
                //         personal.css({'display': 'none', 'transition': '0.2s'});
                //         team.css({'display': 'none', 'transition': '0.2s'});
                //         skills.css({'display': 'none', 'transition': '0.2s'});
                //     } else {
                //         one.removeClass('active').addClass('not-active');
                //         three.removeClass('active').addClass('not-active').css('float', 'right');
                //         two.removeClass('not-active').addClass('active').css('float', 'left');
                //         personal.css({'display': 'inline-block', 'width': '70%', 'transition': 'width .3s'});
                //         team.css({'display': 'none', 'transition': '0.2s'});
                //         skills.css({'display': 'none', 'transition': '0.2s'});
                //     }
                // });

                function threeSlide() {
                    console.log("three slide");
                    if (three.hasClass('active')) {
                        one.removeClass('not-active');
                        two.removeClass('not-active').css('float', 'left');
                        three.removeClass('active').css('float', 'left');
                        personal.css({'display': 'none', 'transition': '0.2s'});
                        team.css({'display': 'none', 'transition': '0.2s'});
                        skills.css({'display': 'none', 'transition': '0.2s'});
                    } else {
                        one.removeClass('active').addClass('not-active');
                        two.removeClass('active').addClass('not-active').css('float', 'left');
                        three.removeClass('not-active').addClass('active').css('float', 'left');
                        personal.css({'display': 'none', 'transition': '0.2s'});
                        team.css({'display': 'inline-block', 'width': '70%', 'transition': 'width .3s'});
                        skills.css({'display': 'none', 'transition': '0.2s'});
                    }
                };

                // navTeam.click(function() {
                //     if (three.hasClass('active')) {
                //         one.removeClass('not-active');
                //         two.removeClass('not-active').css('float', 'left');
                //         three.removeClass('active').css('float', 'left');
                //         personal.css({'display': 'none', 'transition': '0.2s'});
                //         team.css({'display': 'none', 'transition': '0.2s'});
                //         skills.css({'display': 'none', 'transition': '0.2s'});
                //     } else {
                //         one.removeClass('active').addClass('not-active');
                //         two.removeClass('active').addClass('not-active').css('float', 'left');
                //         three.removeClass('not-active').addClass('active').css('float', 'left');
                //         personal.css({'display': 'none', 'transition': '0.2s'});
                //         team.css({'display': 'inline-block', 'width': '70%', 'transition': 'width .3s'});
                //         skills.css({'display': 'none', 'transition': '0.2s'});
                //     }
                // });
            }
        });
