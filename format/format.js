$(window).on("scroll", function() {
    var size = 400 - Math.min(400, $(document).scrollTop());
    $("#logo img").width(size).height(size);

    // var requiredOffset = 0;
    // var percentage = Math.max(1,$(document).scrollTop());
    // var marginleft = requiredOffset * (1-percentage);

    // $("#logo img").css('margin-left',marginleft);

});
// margin-top: 80px;
//     margin-left: 510px;
//     690px
// $(document).ready(funtion()
// {
//     $(window).on("scroll",(funtion()))
//     // {
//     //     var scrollpos = $(window).scrollTop();
//     //     $("#logo").css(
//     //         {
//     //             'height': +(scrollpos)+ 'px'
//     //         })
//     // })
// })