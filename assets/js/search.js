$(function() {
    var header = $("header"),
        body = $("body")
        cartBtn = $(".cart_btn"),
        modalOverlay = $(".modal-overlay"),
        cartBtnActive = false

    $(document).on("click", '.search_btn', function(event){
        event.preventDefault();
        body.addClass("no-scroll");
        header.addClass("search");
        modalOverlay.addClass("show");
    });

    $(document).on("click", '.modal-overlay', function(event){
        event.preventDefault();
        body.removeClass("no-scroll");
        header.removeClass("search");
        modalOverlay.removeClass("show");
    });

});



