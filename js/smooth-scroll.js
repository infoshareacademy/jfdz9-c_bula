$('a[href*="#"]')
    .click(function(event) {
        {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {

                $('html').stop().animate({
                    scrollTop: target.offset().top - 76
                }, 1000);
            }
        }
    });