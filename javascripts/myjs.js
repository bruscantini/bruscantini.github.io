var bg = $("#landing-background");

function resizeBackground() {
    bg.height($(window).height());
}

$(window).resize(resizeBackground);
resizeBackground();
AOS.init();
