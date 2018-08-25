$('a[href*="#"]')
    .click(function(event) {
        {
            var target = $(this.hash);

            if (target.length) {

                $('html').animate({
                    scrollTop: target.offset().top - 50

                $('html').stop().animate({
                    scrollTop: target.offset().top - 76

                }, 1000);
            }
        }
    });