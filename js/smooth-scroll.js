var $root = $('html, body');
$('a').click(function(event) {
    event.stopPropagitation();
    var href = $.attr(this, 'href');
    $root.preventDefault();
    $root.animate({
        scrollTop: $(href).offset().top
    }, 800, function () {
        window.location.hash = href;
    });   
    return false;
});
