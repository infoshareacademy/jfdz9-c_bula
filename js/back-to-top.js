// $(function(){
//     var stt_is_shown = false;
//     $(window).scroll(function(){
//
//         var win_height = 300;
//         var scroll_top = $(document).scrollTop();
//         if (scroll_top > win_height && !stt_is_shown) {
//             stt_is_shown = true;
//             $("#scroll-to-top").fadeIn();
//         } else if (scroll_top < win_height && stt_is_shown) {
//             stt_is_shown = false;
//             $("#scroll-to-top").fadeOut();
//         }
//     });
//     $("#scroll-to-top").click(function(e){
//         e.preventDefault();
//         $('html, body').animate({scrollTop:0}, 1500);
//     });
// });

// window.onscroll = function() {scrollFunction()};
//
// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("scroll-to-top").style.display = "block";
//     } else {
//         document.getElementById("scroll-to-top").style.display = "none";
//     }
// }
//
// function topFunction() {
//     document.body.scrollTop = 0; // For Safari
//     document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }


jQuery(document).ready(function () {
    jQuery("#scroll-to-top").hide();
    jQuery(function () {
        jQuery(window).scroll(function () {
            if (jQuery(window).scrollTop() > 400) {
                jQuery('#scroll-to-top').fadeIn();
            } else {
                jQuery('#scroll-to-top').fadeOut();
            }
        });
    });
});