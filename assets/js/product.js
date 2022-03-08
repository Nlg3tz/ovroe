$(function() {
    $(document).on("click", '.item', function(event){
        $(".info").removeClass("show");
        $(this).find(".info").addClass("show");
    });
});


