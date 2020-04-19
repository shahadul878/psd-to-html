(function ($) {
    "use strict";
    /* ==================== Table Of Content ====================
    1.	Script Initialization
    2.	preloaderSetup
    3.	
    ===========================================================*/
    /* ================================================
       Script Initialization
    ==================================================*/

    // Window Load Function
    $(window).on('load', function () {
        preloaderSetup();
    });

    // Document Ready Function
    $(document).ready(function () {
                
    });

    // Window Resize Function
    $(window).on('resize', function () {

    });

    // Window Scroll Function
    $(window).on('scroll', function () {

    });

    // ========================== preloaderSetup ==========================
    function preloaderSetup() {
        $('body').append('<div id="preloader"></div>')
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    } // preloaderSetup


})(jQuery); // End of use strict
