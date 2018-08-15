var playerName;

(function () {

    var $game = $('.game');

    $('.newsletter-form').submit(function () {
        event.preventDefault();
        $game.children().removeClass('game--hidden');
        $game.children().addClass('game--visible');
        document.body.style.overflow = 'hidden';

        playerName = $('input[name=inputName]').val()
    })

})();


$(document).ready(function(){
    $('.game-board').css({
        position:'absolute',
        left: ($(window).width() - $('.game-board').outerWidth())/2,
        top: ($(window).height() - $('.game-board').outerHeight())/2
    });
});

(function () {

    $('#game-instruction').on('click', function () {
        $('#instruction-info').removeClass('instruction--v-h');
    })

    $('.instruction-exit').on('click', function () {
        $('#instruction-info').addClass('instruction--v-h');
    })
})();
