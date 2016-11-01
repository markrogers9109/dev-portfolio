jQuery(window).ready(function() {
    var container = jQuery('.navcontainer');
    var main = jQuery('.sidebar');

    function toggleSidebar(){
        isShowingSidebar() ? hideSidebar() : showSidebar();
    }

    function showSidebar(){
        container.addClass('show-sidebar');
        main.css('position', 'fixed');
    }

    function hideSidebar(){
        container.removeClass('show-sidebar');
        main.css('position', 'fixed');
    }

    function isShowingSidebar(){
        return container.hasClass('show-sidebar');
    }

    jQuery('hamburger').click(toggleSidebar, false);

    container.click(function(e){
        if(isShowingSidebar()){
            e.preventDefault();
            hideSidebar();
        } else {
            showSidebar();
        }
    });
});
