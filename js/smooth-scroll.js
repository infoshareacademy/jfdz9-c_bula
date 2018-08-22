$('a[href*="#"]')
    .click(function(event) {
        {
            var target = $(this.hash);

            if (target.length) {

                $('html').stop().animate({
                    scrollTop: target.offset().top - 76
                }, 1000);
            }
        }
    });