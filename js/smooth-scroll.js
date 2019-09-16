var $root = $('html, body');
$('a').click(function(event) {
    var href = $.attr(this, 'href');
    $root.preventDefault();
    $root.animate({
        scrollTop: $(href).offset().top
    }, 800, function () {
        event.stopPropagitation();
        window.location.hash = href;
    });
    event.stopPropagitation();
    return false;
});
