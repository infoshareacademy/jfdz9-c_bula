$('[lang="en"]').hide();

$('#switch-lang').click(function() {
    $('[lang="en"]').toggle();
    $(':not(html)[lang="pl"]').toggle();
});