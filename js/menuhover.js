let $navigationLinks = $('#navbarResponsive > ul > li > a');
let $sections = $($(".sections").get().reverse());
let sectionIdTonavigationLink = {};
$sections.each(function() {
    let id = $(this).attr('id');
    sectionIdTonavigationLink[id] = $('#navbarResponsive > ul > li > a[href=\\#' + id + ']');
});
function throttle(fn, interval) {
    let lastCall, timeoutId;
    return function () {
        let now = new Date().getTime();
        if (lastCall && now < (lastCall + interval) ) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
                lastCall = now;
                fn.call();
            }, interval - (now - lastCall) );
        } else {
            lastCall = now;
            fn.call();
        }
    };
}

function highlightNavigation() {
    let scrollPosition = $(window).scrollTop();

    $sections.each(function() {
        let currentSection = $(this);
        let sectionTop = currentSection.offset().top

        if (scrollPosition >= sectionTop-100) {
            let id = currentSection.attr('id');

            let $navigationLink = sectionIdTonavigationLink[id];
            if (!$navigationLink.hasClass('sections-active')) {
                $navigationLinks.removeClass('sections-active');
                $navigationLink.addClass('sections-active');
            }

            return false;
        }
    });
}

$(window).scroll( throttle(highlightNavigation,100) );

// if you don't want to throttle the function use this instead:
// $(window).scroll( highlightNavigation );