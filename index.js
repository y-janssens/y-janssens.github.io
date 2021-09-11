window.onload = init();
window.onload = resize();
window.onload = texture();
function reportWindowSize() {
    resize();
}
window.onresize = reportWindowSize;
window.addEventListener('resize', reportWindowSize);

let ui_toggle = true;
let img_toggle = false;
let vid_toggle = false;
let battle_toggle = false;
let clock_toggle = false;
let portfolio_toggle = true;
let galery_toggle = false;
let real_toggle = false;
let dev_toggle = false;
let contact_toggle = true;

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
    let height_f = document.getElementById('block').offsetHeight;
    let width_h = document.getElementById('block').offsetWidth;

    s_width = height / 1.5;
    s_width_l = height_l / 1.75;
    s_width_d = height_d / 1.5;
    s_width_if = height_if / 1250;
    s_width_f = height_f / 800;
    s_width_h = width_h / 50;
    s_width_h1 = width_h / 1000;

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

    $('#card_large1').css('width', s_width_l);
    $('#card_large2').css('width', s_width_l);
    $('#card_large3').css('width', s_width_l);

    $('#card16').css('width', s_width_d);
    $('#card17').css('width', s_width_d);
    $('#card18').css('width', s_width_d);
    $('#card19').css('width', s_width_d);
    $('#card20').css('width', s_width_d);

    $('#battler').css('transform', 'translate(-50%, -50%) scale(' + s_width_if + ')');
    $('#clock').css('transform', 'translate(-50%, -50%) scale(' + s_width_if + ')');
    $('#contact_form').css('transform', 'translate(-50%, -50%) scale(' + s_width_f + ')');
    $('.bh').css('padding-left', s_width_h);
    $('.bh').css('padding-right', s_width_h);
    $('.bh').css('margin-left', s_width_h / 2);
    $('.bh').css('margin-right', s_width_h / 2);
    $('.bf').css('padding-left', s_width_h * 0.8);
    $('.bf').css('padding-right', s_width_h * 0.8);
    $('.bf').css('margin-left', s_width_h / 2.5); //  / 2
    $('.bf').css('margin-right', s_width_h / 2.5); // / 2

    if (width_h <= 800) {
        $('h1').css('font-size', '1.1rem'); // 1.25
        $('h1').css('top', '1.5em');
        $('h1').css('left', '40%');
        $('.header_desc').css('font-size', '0.7rem');
        $('.header_desc').css('top', '5.5em');
        $('.header_desc').css('left', '40%');
        $('#pic').css('width', '5.5em');
        $('#pic').css('height', '5.5em');
        $('#user').css('top', '1.5em');
        $('#user').css('right', '1.5em');
        $('.bf').css('font-size', '0.5rem');
        $('.bh').css('font-size', '0.6rem');
/*         $('#card1').css('height', '30%');
        $('#card2').css('height', '30%');
        $('#card3').css('height', '30%');
        $('#card4').css('height', '30%');
        $('#card5').css('height', '30%');
        $('#card6').css('height', '30%');
        $('#card7').css('height', '30%');
        $('#card8').css('height', '30%');
        $('#card9').css('height', '30%');
        $('#card10').css('height', '30%'); */
    } else if (width_h <= 1200) {
        $('#card1').css('height', '60%');
        $('#card2').css('height', '60%');
        $('#card3').css('height', '60%');
        $('#card4').css('height', '60%');
        $('#card5').css('height', '60%');
        $('#card6').css('height', '60%');
        $('#card7').css('height', '60%');
        $('#card8').css('height', '60%');
        $('#card9').css('height', '60%');
        $('#card10').css('height', '60%');
    } else {
        $('h1').css('font-size', '2rem');
        $('h1').css('top', '0');
        $('h1').css('left', '50%');
        $('.header_desc').css('font-size', '0.8rem');
        $('.header_desc').css('top', '4.5em');
        $('.header_desc').css('left', '50%');
        $('#pic').css('width', '7em');
        $('#pic').css('height', '7em');
        $('#user').css('top', '1em');
        $('.bf').css('font-size', '0.65rem');
        $('.bh').css('font-size', '0.75rem');
        $('#card1').css('height', '75%');
        $('#card2').css('height', '75%');
        $('#card3').css('height', '75%');
        $('#card4').css('height', '75%');
        $('#card5').css('height', '75%');
        $('#card6').css('height', '75%');
        $('#card7').css('height', '75%');
        $('#card8').css('height', '75%');
        $('#card9').css('height', '75%');
        $('#card10').css('height', '75%');
    }
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
    $('.slider').css('transform', 'translateY(-50%)');
}

function portfolio() {
    if (portfolio_toggle == true) {
        portfolio_toggle = false;
        $('.slider').css('transition', '500ms all');
        $('.slider').css('display', 'none');
        $('#bh1').css('transition', '250ms all');
        $('#bh1').css('background-color', 'transparent');
        $('#bh1').css('box-shadow', 'none');
        $('#bh1').css('transform', 'translateY(0px) scaleY(1.1)');

    } else if (portfolio_toggle == false) {
        portfolio_toggle = true;
        $('.slider').css('transition', '500ms all');
        $('.slider').css('display', 'initial');
        $('#bh1').css('transition', '250ms all');
        $('#bh1').css('background-color', '#DCDBD7');
        $('#bh1').css('box-shadow', 'inset 0px 0px 0px 1px rgba(0, 0, 0, 0.05)');
        $('#bh1').css('transform', 'translateY(-3px) scaleY(1.1)');
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
        $('#bh2').css('transition', '250ms all');
        $('#bh2').css('background-color', 'transparent');
        $('#bh2').css('box-shadow', 'none');
        $('#bh2').css('transform', 'translateY(0px) scaleY(1.1)');

    } else if (galery_toggle == false) {
        galery_toggle = true;
        $('.galery').css('transition', '500ms all');
        $('.galery').css('display', 'initial');
        $('#bh2').css('transition', '250ms all');
        $('#bh2').css('background-color', '#DCDBD7');
        $('#bh2').css('box-shadow', 'inset 0px 0px 0px 1px rgba(0, 0, 0, 0.05)');
        $('#bh2').css('transform', 'translateY(-3px) scaleY(1.1)');
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
        $('#bh3').css('transition', '250ms all');
        $('#bh3').css('background-color', 'transparent');
        $('#bh3').css('box-shadow', 'none');
        $('#bh3').css('transform', 'translateY(0px) scaleY(1.1)');

    } else if (real_toggle == false) {
        real_toggle = true;
        $('.real').css('transition', '500ms all');
        $('.real').css('display', 'initial');
        $('#bh3').css('transition', '250ms all');
        $('#bh3').css('background-color', '#DCDBD7');
        $('#bh3').css('box-shadow', 'inset 0px 0px 0px 1px rgba(0, 0, 0, 0.05)');
        $('#bh3').css('transform', 'translateY(-3px) scaleY(1.1)');
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
        $('#bh4').css('transition', '250ms all');
        $('#bh4').css('background-color', 'transparent');
        $('#bh4').css('box-shadow', 'none');
        $('#bh4').css('transform', 'translateY(0px) scaleY(1.1)');

    } else if (dev_toggle == false) {
        dev_toggle = true;
        $('.dev').css('transition', '500ms all');
        $('.dev').css('display', 'initial');
        $('#bh4').css('transition', '250ms all');
        $('#bh4').css('background-color', '#DCDBD7');
        $('#bh4').css('box-shadow', 'inset 0px 0px 0px 1px rgba(0, 0, 0, 0.05)');
        $('#bh4').css('transform', 'translateY(-3px) scaleY(1.1)');
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
    $('#bh1').css('background-color', 'transparent');
    $('#bh1').css('box-shadow', 'none');
    $('#bh1').css('transform', 'translateY(0px) scaleY(1.1)');
}

function shutdown_2() {
    galery_toggle = false;
    $('.galery').css('transition', '500ms all');
    $('.galery').css('display', 'none');
    $('#bh2').css('background-color', 'transparent');
    $('#bh2').css('box-shadow', 'none');
    $('#bh2').css('transform', 'translateY(0px) scaleY(1.1)');
}

function shutdown_3() {
    real_toggle = false;
    $('.real').css('transition', '500ms all');
    $('.real').css('display', 'none');
    $('#bh3').css('background-color', 'transparent');
    $('#bh3').css('box-shadow', 'none');
    $('#bh3').css('transform', 'translateY(0px) scaleY(1.1)');
}

function shutdown_4() {
    dev_toggle = false;
    $('.dev').css('transition', '500ms all');
    $('.dev').css('display', 'none');
    $('#bh4').css('background-color', 'transparent');
    $('#bh4').css('box-shadow', 'none');
    $('#bh4').css('transform', 'translateY(0px) scaleY(1.1)');
}

function contact() {
    if (contact_toggle) {
        contact_toggle = false;
        $('#contact_form').css('display', 'initial');
        $('#clear_3').css('display', 'initial');
        $('.slider').css('pointer-events', 'none');
        $('.galery').css('pointer-events', 'none');
        $('.real').css('pointer-events', 'none');
        $('.dev').css('pointer-events', 'none');
    } else if (contact_toggle == false) {
        contact_toggle = true;
        $('#contact_form').css('display', 'none');
        $('#clear_3').css('display', 'none');
    }
    resize();
}

$("#clear_3").click(function () {
    contact_toggle = true;
    $('#contact_form').css('display', 'none');
    $('#clear_3').css('display', 'none');
    $('.slider').css('pointer-events', 'initial');
    $('.galery').css('pointer-events', 'initial');
    $('.real').css('pointer-events', 'initial');
    $('.dev').css('pointer-events', 'initial');
});

$(".img").click(function (event) {
    let img_src = event.target.src;
    if (img_toggle == false) {
        img_toggle = true;
        $('#show_img').css('display', 'initial');
        $('.g_container').css('display', 'initial');
        $('.g_container').css('pointer-events', 'all');
        document.getElementById('show_img').src = img_src;
    }
});

$(".g_container").click(function () {
    img_toggle = false;
    $('#show_img').css('display', 'none');
    $('.g_container').css('display', 'none');
    $('.g_container').css('pointer-events', 'none');
});

$(".vid").click(function (event) {
    let vid_src = event.target.src;
    if (vid_toggle == false) {
        vid_toggle = true;
        $('#show_vid').css('display', 'initial');
        $('.d_container').css('display', 'initial');
        $('.d_container').css('pointer-events', 'all');
        document.getElementById('show_vid').src = vid_src;
        document.getElementById('show_vid').play();
    }
});

$(".d_container").click(function () {
    vid_toggle = false;
    battle_toggle = false;
    clock_toggle = false;
    $('#show_vid').css('display', 'none');
    $('#battler').css('display', 'none');
    $('#clock').css('display', 'none');
    $('.d_container').css('display', 'none');
    $('.d_container').css('pointer-events', 'none');
});

$("#card18").click(function () {
    if (battle_toggle == false) {
        battle_toggle = true;
        $('#battler').css('display', 'initial');
        $('.d_container').css('display', 'initial');
        $('.d_container').css('pointer-events', 'all');
    }
    resize();
});

$("#card19").click(function () {
    if (clock_toggle == false) {
        clock_toggle = true;
        $('#clock').css('display', 'initial');
        $('.d_container').css('display', 'initial');
        $('.d_container').css('pointer-events', 'all');
    }
    resize();
});


$("#card_large1").click(function () {
    window.open("./cv/site/3d/index.html");
});

$("#card_large2").click(function () {
    window.open("./cv/site/remparts/index.html");
});

function texture() {
    let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    document.getElementById("texture").innerHTML = lorem.repeat(20);

    function randomXToY(minVal, maxVal, floatVal) {
        var randVal = minVal + (Math.random() * (maxVal - minVal));
        return typeof floatVal == 'undefined' ? Math.round(randVal) : randVal.toFixed(floatVal);
    }

    var exploded = $('#texture').text().split('');
    var count = 100;
    var rdmltr = [];

    while (count--) {
        rdmltr[count] = randomXToY(0, exploded.length);
        while (exploded[rdmltr[count]] == ' ') {
            rdmltr[count] = randomXToY(0, exploded.length);
        }
    }
    while (count++ < 100) {
        exploded[rdmltr[count]] = '<span class="boldify">' + exploded[rdmltr[count]] + '</span>';
    }

    $('#texture').html(exploded.join(''));
    $('#f_texture').html(exploded.join(''));
}

function submit() {
    form_name = document.getElementById('c_name').value;
    form_mail = document.getElementById('c_mail').value;
    form_msg = document.getElementById('c_msg').value;
    send_msg = "Message envoyé!"
    document.getElementById("c_name").value = "";
    document.getElementById("c_mail").value = "";
    document.getElementById("c_msg").value = "";

    if (form_name !== "" || form_mail !== "" || form_msg !== "") {
        Email.send({
            SecureToken: "8b7345b9-8abe-4224-a3c6-6b6b24c3d059",
            To: 'y.janssens@protonmail.com',
            From: "skorpiostyle@gmail.com",
            Subject: "Un nouveau message de " + form_name,
            Body: "Un nouveau message de " + form_name + " vient d'arriver." + "</br>" +
                "E-mail: " + form_mail + "</br>" + "</br>" + form_msg
        }).then(
            $('#submit').css('color', '#4CC417'),
            document.getElementById('submit').value = "Message envoyé!",
            setTimeout(function () {
                $('#submit').css('color', 'rgba(120, 120, 120, 0.85)');
                document.getElementById('submit').value = "Envoyer";
            }, 2000)
        );
    } else if (form_name == "" || form_mail == "" || form_msg == "") {
        document.getElementById("c_name").value = "* Nom";
        document.getElementById("c_mail").value = "* E-mail";
        document.getElementById("c_msg").value = "* Message";
        document.getElementById('submit').value = "Non envoyé";
        $('#c_name').css('color', '#ec5151');
        $('#c_mail').css('color', '#ec5151');
        $('#c_msg').css('color', '#ec5151');
        $('#submit').css('color', '#ec5151');
        setTimeout(function () {
            $('#submit').css('color', 'rgba(120, 120, 120, 0.85)');
            $('#c_name').css('color', 'rgba(120, 120, 120, 0.75)');
            $('#c_mail').css('color', 'rgba(120, 120, 120, 0.75)');
            $('#c_msg').css('color', 'rgba(120, 120, 120, 0.75)');
            document.getElementById('submit').value = "Envoyer";
            document.getElementById("c_name").value = "";
            document.getElementById("c_mail").value = "";
            document.getElementById("c_msg").value = "";
        }, 2000)
    }
}