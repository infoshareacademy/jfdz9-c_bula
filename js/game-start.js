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


// $(document).ready(function(){
//     $('.game-board').css({
//         position:'absolute',
//         left: ($(window).width() - $('.game-board').outerWidth())/2,
//         top: ($(window).height() - $('.game-board').outerHeight())/2
//     });
// });
//
// (function () {
//
//     $('#game-instruction').on('click', function () {
//         $('#instruction-info').removeClass('instruction--v-h');
//     });
//
//     $('.instruction-exit').on('click', function () {
//         $('#instruction-info').addClass('instruction--v-h');
//     })
// })();
//
// (function () {
//
//     $('#start').on('click', function () {
//         // $('#game-board--v-h').addClass('game-board--v-h')
//         // alert('heo');
//         // $('.game-score').css({"width": "300px", "border-width": "1px", "border-style": "solid", "border-color": "black"}).animate({left: '10px'});
//
//
//     })
//
//
//
// })();
(function(){

    var gameBoard = $('.game-board'),
        gameInstruction = $('#game-instruction'),
        instructionInfo = $('#instruction-info'),
        instructionExit = $('.instruction-exit'),
        start = $('#start');

    gameBoard.css({
        position:'absolute',
        left: ($(window).width() - gameBoard.outerWidth())/2,
        top: ($(window).height() - gameBoard.outerHeight())/2
    });

    gameInstruction.on('click', function () {
        instructionInfo.removeClass('instruction--v-h');
    });

    instructionExit.on('click', function () {
        instructionInfo.addClass('instruction--v-h');
    });


    start.on('click', function () {
        $('.game-logo').addClass('game-board--v-h');
        $('.game-title').addClass('game-board--v-h');
        $('#game-start-screen').addClass('game-board--v-h');
        $('#game-score').addClass('current').animate({top: '0'}, 800);



    })



})();