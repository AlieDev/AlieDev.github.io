var $root = $('html, body');
$('a').click(function(event) {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 800, function () {
        event.preventDefault();
        window.location.hash = href;
    });
    return false;
});
