var R = Math.floor(Math.random() * 255);
var Rmax = 0;
var G = Math.floor(Math.random() * 255);
var Gmax = 0;
var B = Math.floor(Math.random() * 255);
var Bmax = 0;
function zmianaKoloru() {
$('.randomColor').css('color', 'rgb(' + R + ',' + G +',' + B + ')');
$('.randomBackground').css('background', 'rgb(' + R + ',' + G +',' + B + ')');
$('.randomGradient').css('background', 'linear-gradient(white, rgb(' + R + ',' + G +',' + B + '))');
$('.contact-col').hover(css('background', 'radial-gradient(white, rgb(' + R + ',' + G +',' + B + '))'), css('background', 'white') );
);
// Red changing:
if (R == 255) {
    Rmax = 1;
}
else if (R == 1) {
    Rmax = 0;
}
if (Rmax == 0) {
    R++;
} else {
    R--;
}
// Green changing:
if (G == 255) {
    Gmax = 1;
}
else if (G == 1) {
    Gmax = 0;
}
if (Gmax == 0) {
    G++;
} else {
    G--;
}
// Blue changing;
if (B == 255) {
    Bmax = 1;
}
else if (B == 1) {
    Bmax = 0;
}
if (Bmax == 0) {
    B++;
} else {
    B--;
}
}
setInterval(zmianaKoloru, 20);