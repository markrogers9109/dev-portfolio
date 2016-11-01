
jQuery(window).ready(function() {

    var $ = jQuery;

    // var addActive = jQuery('.add-active');
    var one = $('.projects-column_one'),
        two = $('.projects-column_two'),
        three = $('.projects-column_three'),
        team = $('.team'),
        personal = $('.personal');


    one.click(function() {
        if (one.hasClass('active')) {
            two.removeClass('not-active').css('float', 'left');
            three.removeClass('not-active').css('float', 'left');
            one.removeClass('active');
            personal.css('display', 'none');
            team.css('display', 'none');
        } else {
            two.removeClass('active').addClass('not-active').css('float', 'right');
            three.removeClass('active').addClass('not-active').css('float', 'right');
            one.removeClass('not-active').addClass('active');
            personal.css({'display': 'inline-block', 'width': '70%', 'transition': 'width .3s'});
            team.css('display', 'none');
        }
    });

    two.click(function() {
        if (two.hasClass('active')) {
            one.removeClass('not-active');
            three.removeClass('not-active').css('float', 'left');
            two.removeClass('active').css('float', 'left');
            personal.css('display', 'none');
            team.css('display', 'none');
        } else {
            one.removeClass('active').addClass('not-active');
            three.removeClass('active').addClass('not-active').css('float', 'right');
            two.removeClass('not-active').addClass('active').css('float', 'left');
            personal.css('display', 'none');
            team.css({'display': 'inline-block', 'width': '70%', 'transition': 'width .3s'});
        }
    });

    three.click(function() {
        if (three.hasClass('active')) {
            one.removeClass('not-active');
            two.removeClass('not-active').css('float', 'left');
            three.removeClass('active').css('float', 'left');
            personal.css('display', 'none');
            team.css('display', 'none');
        } else {
            one.removeClass('active').addClass('not-active');
            two.removeClass('active').addClass('not-active').css('float', 'left');
            three.removeClass('not-active').addClass('active').css('float', 'left');
            personal.css('display', 'none');
            team.css('display', 'none');
        }
    });

});
