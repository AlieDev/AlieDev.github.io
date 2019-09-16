var $root = $('html, body');
$('a').click(function() {
    console.log(event);
    var href = $.attr(this, 'href');
    $root.preventDefault();
    $root.animate({
        scrollTop: $(href).offset().top
    }, 800, function () {
        window.location.hash = href;
    });   
    return false;
});
