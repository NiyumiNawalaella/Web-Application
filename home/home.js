$(window).on("scroll", function() {
    var size = 400 - Math.min(400, $(document).scrollTop());
    $("#logo img").width(size).height(size).margin(center);
});
