
angular.module('portfolio')

    .controller('homeAnimationCtrl', function($scope, $document) {

        $scope.oneSlide = oneSlide;
        $scope.twoSlide = twoSlide;
        $scope.threeSlide = threeSlide;

        var $ = jQuery;
            // var addActive = jQuery('.add-active');
            var one = $('.projects-column_one'),
                two = $('.projects-column_two'),
                three = $('.projects-column_three'),
                team = $('#team-projects'),
                personal = $('#personal-projects'),
                skills = $('#super-powers'),
                navTeam = $('.team'),
                navPersonal = $('.personal'),
                navSkills = $('.skills');

            function oneSlide(one, two, three, personal, team, skills) {
                console.log("one slide");
                two.removeClass('active').addClass('not-active').css('float', 'right');
                three.removeClass('active').addClass('not-active').css('float', 'right');
                one.removeClass('not-active').addClass('active');
                personal.css({'display': 'none', 'transition': '0.2s'});
                team.css({'display': 'none', 'transition': '0.2s'});
                skills.css({'display': 'inline-block', 'width': '70%', 'transition': 'width .3s'});
            };

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
        });
