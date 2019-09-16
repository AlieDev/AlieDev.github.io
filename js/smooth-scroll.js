var $root = $('html, body');
$('a').click(function(event) {
    var href = $.attr(this, 'href');
    $root.stop().animate({
        scrollTop: $(href).offset().top
    }, 800, function () {
        window.location.hash = href;
    });
    return false;
});
