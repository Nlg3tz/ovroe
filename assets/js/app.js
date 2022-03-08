$(function() {

    var header = $("#header"),
        headerH = $("#header").innerHeight(),
        scrollOffset = $(window).scrollTop(),
        doc_w = $(window).width();

        

    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });


    function checkScroll(scrollOffset) {
        if(doc_w > '768'){
            if( scrollOffset >= headerH ) {
                header.addClass("fixed");
            } else {
                header.removeClass("fixed");
            }
        }

        if(doc_w < '768'){
            if( scrollOffset > 0 ) {
                header.addClass("fixed");
            } else {
                header.removeClass("fixed");
            }
        }
        
    }

});



