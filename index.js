window.onload = init();
function reportWindowSize() {
    resize();
}
window.onresize = reportWindowSize;
window.addEventListener('resize', reportWindowSize);

let ui_toggle = true;
let img_toggle = false;
let vid_toggle = false;
let battle_toggle = false;
let portfolio_toggle = true;
let galery_toggle = false;
let real_toggle = false;
let dev_toggle = false;

let slide1_focus = false;
let slide2_focus = false;
let slide3_focus = false;
let slide4_focus = false;
let slide5_focus = false;
let slide6_focus = false;
let slide7_focus = false;
let slide8_focus = false;
let slide9_focus = false;
let slide10_focus = false;

function resize() {
    let height = document.getElementById('card1').offsetHeight;
    let height_l = document.getElementById('card_large1').offsetHeight;
    let height_d = document.getElementById('card16').offsetHeight;
    let height_if = document.getElementById('container').offsetHeight;

    let pos_top = document.getElementById('battler').offsetTop;
    let pos_left = document.getElementById('battler').offsetLeft;

    top = pos_top /100 + "em";
    left = pos_left + 250;

    $('.clear').css('top', top);
    $('.clear').css('left', left);

    s_width = height / 1.5;
    s_width_l = height_l / 1.75;
    s_width_d = height_d / 1.5;
    s_width_if = height_if / 1250;

    $('#card1').css('width', s_width);
    $('#card2').css('width', s_width);
    $('#card3').css('width', s_width);
    $('#card4').css('width', s_width);
    $('#card5').css('width', s_width);
    $('#card6').css('width', s_width);
    $('#card7').css('width', s_width);
    $('#card8').css('width', s_width);
    $('#card9').css('width', s_width);
    $('#card10').css('width', s_width);
    $('#card11').css('width', s_width);
    $('#card12').css('width', s_width);
    $('#card13').css('width', s_width);
    $('#card14').css('width', s_width);
    $('#card15').css('width', s_width);

    $('#card_large1').css('width', s_width_l);
    $('#card_large2').css('width', s_width_l);
    $('#card_large3').css('width', s_width_l);

    $('#card16').css('width', s_width_d);
    $('#card17').css('width', s_width_d);
    $('#card18').css('width', s_width_d);
    $('#card19').css('width', s_width_d);
    $('#card20').css('width', s_width_d);

    $('#battler').css('transform', 'translate(-50%, -50%) scale(' + s_width_if + ')');
}

$(".slide1").click(function () {
    if (slide1_focus == false) {
        slide1_focus = true;
        $(".slide1").stop().animate({ width: '20%' }, 350);
    } else {
        slide1_focus = false;
        $(".slide1").stop().animate({ width: '10.1%' }, 350);
    }
});

$(".slide2").click(function () {
    if (slide2_focus == false) {
        slide2_focus = true;
        $(".slide2").stop().animate({ width: '20%' }, 350);
    } else {
        slide2_focus = false;
        $(".slide2").stop().animate({ width: '10.1%' }, 350);
    }
});

$(".slide3").click(function () {
    if (slide3_focus == false) {
        slide3_focus = true;
        $(".slide3").stop().animate({ width: '20%' }, 350);
    } else {
        slide3_focus = false;
        $(".slide3").stop().animate({ width: '10.1%' }, 350);
    }
});

$(".slide4").click(function () {
    if (slide4_focus == false) {
        slide4_focus = true;
        $(".slide4").stop().animate({ width: '20%' }, 350);
    } else {
        slide4_focus = false;
        $(".slide4").stop().animate({ width: '10.1%' }, 350);
    }
});

$(".slide5").click(function () {
    if (slide5_focus == false) {
        slide5_focus = true;
        $(".slide5").stop().animate({ width: '20%' }, 350);
    } else {
        slide5_focus = false;
        $(".slide5").stop().animate({ width: '10.1%' }, 350);
    }
});

$(".slide6").click(function () {
    if (slide6_focus == false) {
        slide6_focus = true;
        $(".slide6").stop().animate({ width: '20%' }, 350);
    } else {
        slide6_focus = false;
        $(".slide6").stop().animate({ width: '10.1%' }, 350);
    }
});

$(".slide7").click(function () {
    if (slide7_focus == false) {
        slide7_focus = true;
        $(".slide7").stop().animate({ width: '20%' }, 350);
    } else {
        slide7_focus = false;
        $(".slide7").stop().animate({ width: '10.1%' }, 350);
    }
});

$(".slide8").click(function () {
    if (slide8_focus == false) {
        slide8_focus = true;
        $(".slide8").stop().animate({ width: '20%' }, 350);
    } else {
        slide8_focus = false;
        $(".slide8").stop().animate({ width: '10.1%' }, 350);
    }
});

$(".slide9").click(function () {
    if (slide9_focus == false) {
        slide9_focus = true;
        $(".slide9").stop().animate({ width: '20%' }, 350);
    } else {
        slide9_focus = false;
        $(".slide9").stop().animate({ width: '10.1%' }, 350);
    }
});

$(".slide10").click(function () {
    if (slide10_focus == false) {
        slide10_focus = true;
        $(".slide10").stop().animate({ width: '20%' }, 350);
    } else {
        slide10_focus = false;
        $(".slide10").stop().animate({ width: '10.1%' }, 350);
    }
});

function init() {
    $('.slider').css('transition', '1500ms all');
    $('.slider').css('transform', 'translateY(0%)');
}

function portfolio() {
    if (portfolio_toggle == true) {
        portfolio_toggle = false;
        $('.slider').css('transition', '500ms all');
        $('.slider').css('display', 'none');

    } else if (portfolio_toggle == false) {
        portfolio_toggle = true;
        $('.slider').css('transition', '500ms all');
        $('.slider').css('display', 'initial');
    }
    shutdown_2();
    shutdown_3();
    shutdown_4();
    resize();
}

function galery() {
    if (galery_toggle == true) {
        galery_toggle = false;
        $('.galery').css('transition', '500ms all');
        $('.galery').css('display', 'none');

    } else if (galery_toggle == false) {
        galery_toggle = true;
        $('.galery').css('transition', '500ms all');
        $('.galery').css('display', 'initial');
    }
    shutdown_1();
    shutdown_3();
    shutdown_4();
    resize();
}

function real() {
    if (real_toggle == true) {
        real_toggle = false;
        $('.real').css('transition', '500ms all');
        $('.real').css('display', 'none');

    } else if (real_toggle == false) {
        real_toggle = true;
        $('.real').css('transition', '500ms all');
        $('.real').css('display', 'initial');
    }
    shutdown_1();
    shutdown_2();
    shutdown_4();
    resize();
}

function dev() {
    if (dev_toggle == true) {
        dev_toggle = false;
        $('.dev').css('transition', '500ms all');
        $('.dev').css('display', 'none');

    } else if (dev_toggle == false) {
        dev_toggle = true;
        $('.dev').css('transition', '500ms all');
        $('.dev').css('display', 'initial');
    }
    shutdown_1();
    shutdown_2();
    shutdown_3();
    resize();
}

function shutdown_1() {
    portfolio_toggle = false;
    $('.slider').css('transition', '500ms all');
    $('.slider').css('display', 'none');
}

function shutdown_2() {
    galery_toggle = false;
    $('.galery').css('transition', '500ms all');
    $('.galery').css('display', 'none');
}

function shutdown_3() {
    real_toggle = false;
    $('.real').css('transition', '500ms all');
    $('.real').css('display', 'none');
}

function shutdown_4() {
    dev_toggle = false;
    $('.dev').css('transition', '500ms all');
    $('.dev').css('display', 'none');
}

function switch_ui() {
    if (ui_toggle == false) {
        ui_toggle = true;
        $('body').css('background-color', '#bbbbbb');
        $('header').css('background-color', '#e8e7e3');
        $('footer').css('background-color', '#e8e7e3');
        $('h1').css('color', '#77787B');
        $('button').css('color', '#77787B');
        $('.header_desc').css('color', '#77787B');
        $('#card1').css('background-color', '#e8e7e3');
        $('#card2').css('background-color', '#e8e7e3');
        $('#card3').css('background-color', '#e8e7e3');
        $('#card4').css('background-color', '#e8e7e3');
        $('#card5').css('background-color', '#e8e7e3');
        $('#card6').css('background-color', '#e8e7e3');
        $('#card7').css('background-color', '#e8e7e3');
        $('#card8').css('background-color', '#e8e7e3');
        $('#card9').css('background-color', '#e8e7e3');
        $('#card10').css('background-color', '#e8e7e3');
        $('#card_large1').css('background-color', '#e8e7e3');
        $('#card_large2').css('background-color', '#e8e7e3');
        $('#card_large3').css('background-color', '#e8e7e3');
        $('#card11').css('background-color', '#e8e7e3');
        $('#card12').css('background-color', '#e8e7e3');
        $('#card13').css('background-color', '#e8e7e3');
        $('#card14').css('background-color', '#e8e7e3');
        $('#card15').css('background-color', '#e8e7e3');
        $('#card16').css('background-color', '#e8e7e3');
        $('#card17').css('background-color', '#e8e7e3');
        $('#card18').css('background-color', '#e8e7e3');
        $('#card19').css('background-color', '#e8e7e3');
        $('#card20').css('background-color', '#e8e7e3');
    } else if (ui_toggle == true) {
        ui_toggle = false;
        $('body').css('background-color', '#171717');
        $('header').css('background-color', '#252525');
        $('footer').css('background-color', '#252525');
        $('h1').css('color', '#e0dfda87');
        $('button').css('color', '#e0dfda87');
        $('.header_desc').css('color', '#e0dfda87');
        $('#card1').css('background-color', '#303030');
        $('#card2').css('background-color', '#303030');
        $('#card3').css('background-color', '#303030');
        $('#card4').css('background-color', '#303030');
        $('#card5').css('background-color', '#303030');
        $('#card6').css('background-color', '#303030');
        $('#card7').css('background-color', '#303030');
        $('#card8').css('background-color', '#303030');
        $('#card9').css('background-color', '#303030');
        $('#card10').css('background-color', '#303030');
        $('#card_large1').css('background-color', '#303030');
        $('#card_large2').css('background-color', '#303030');
        $('#card_large3').css('background-color', '#303030');
        $('#card11').css('background-color', '#303030');
        $('#card12').css('background-color', '#303030');
        $('#card13').css('background-color', '#303030');
        $('#card14').css('background-color', '#303030');
        $('#card15').css('background-color', '#303030');
        $('#card16').css('background-color', '#303030');
        $('#card17').css('background-color', '#303030');
        $('#card18').css('background-color', '#303030');
        $('#card19').css('background-color', '#303030');
        $('#card20').css('background-color', '#303030');
    }
}

$(".img").click(function (event) {
    let img_src = event.target.src;
    if (img_toggle == false) {
        img_toggle = true;
        $('#show_img').css('display', 'initial');
        document.getElementById('show_img').src = img_src;
    } else {
        img_toggle = false;
        $('#show_img').css('display', 'none');
    }
});

$("#show_img").click(function () {
    img_toggle = false;
    $('#show_img').css('display', 'none');
});

$(".vid").click(function (event) {
    let vid_src = event.target.src;
    if (vid_toggle == false) {
        vid_toggle = true;
        $('#show_vid').css('display', 'initial');
        document.getElementById('show_vid').src = vid_src;
        document.getElementById('show_vid').play();
    } else {
        vid_toggle = false;
        $('#show_vid').css('display', 'none');
    }
});

$("#show_vid").click(function () {
    vid_toggle = false;
    $('#show_vid').css('display', 'none');
});

$("#card18").click(function () {
    if (battle_toggle == true) {
        battle_toggle = false;
    $('#battler').css('display', 'visible');
    $('#clear1').css('display', 'visible');
    } else {
        battle_toggle = true;
        $('#battler').css('display', 'initial');
        $('#clear1').css('display', 'initial');
    }
    resize();
});

$("#clear1").click(function () {
    battle_toggle = false;
    $('#battler').css('display', 'none');
    $('#clear1').css('display', 'none');
});