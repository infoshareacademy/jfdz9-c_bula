jQuery(document).ready(function($){
    $('#navbarResponsive').prepend('<div id="menu-icon">Menu</div>');
    $("#menu-icon").on("click", function(){
        $("#menu").slideToggle();
        $(this).toggleClass("active");
    });
});

$('#menu li').on('click', function(){
    $("#menu").hide();
    $("#menu-icon").removeClass("active");
});