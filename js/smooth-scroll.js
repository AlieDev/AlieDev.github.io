var $root = $('html, body');
$('a').click(function() {
    event.preventDefault();
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 800, function () {
        window.location.hash = href;
    });
    return false;
});
