window.onload = resize();
window.onload = scrollbar();
window.onresize = reportWindowSize;
window.addEventListener('resize', reportWindowSize);

let plus = true;
let colorToggle = false;
let muteSound = false;
let panel1 = true;
let panel2 = true;
let panel3 = true;
let panel4 = true;
let panel5 = true;
let panel6 = true;

function toggleOn() {
    $('.toggle').css('visibility', 'visible');
    $('.toggle').css('transform', 'translateX(-7.6em) scale(0.8)');
    $('.toggle').css('transition', '1250ms ease-in-out');
}

function toggleOff() {
    $('.toggle').css('visibility', 'hidden');
    $('.toggle').css('transform', 'translateX(0em) scale(0.8)');
    $('.toggle').css('transition', '550ms ease-in-out');
}

$('.close').on('touchstart click', function () {
    $('#blocleft').css('transform', 'translateX(-18em)');
    $('#blocleft').css('transition', '500ms ease-in-out');
    $('.toggle').css('transform', 'translateX(-18em) scale(0.8)');
    $('.toggle').css('transition', '550ms ease-in-out');
    $('#item0').css('transition', '500ms ease-in-out');
    $('#img1').css('transition', '500ms ease-in-out');
    $('#img2').css('transition', '500ms ease-in-out');
    $('#img3').css('transition', '500ms ease-in-out');
    $('canvas').css('transition', '500ms ease-in-out');
    $('#item0').css('margin-left', '0em');
    $('#img1').css('margin-left', '0em');
    $('#img2').css('margin-left', '0em');
    $('#img3').css('margin-left', '0em');
    $('canvas').css('margin-left', '0em');    
    setTimeout("toggleOn()", 300);
});

$('.toggle').on('touchstart click', function () {
    $('#blocleft').css('transform', 'translateX(0em)');
    $('#blocleft').css('transition', '500ms ease-in-out');
    $('#item0').css('transition', '500ms ease-in-out');
    $('#img1').css('transition', '500ms ease-in-out');
    $('#img2').css('transition', '500ms ease-in-out');
    $('#img3').css('transition', '500ms ease-in-out');
    $('canvas').css('transition', '500ms ease-in-out');
    $('#item0').css('margin-left', '9em');
    $('#img1').css('margin-left', '9em');
    $('#img2').css('margin-left', '9em');
    $('#img3').css('margin-left', '9em');
    $('canvas').css('margin-left', '9em');
    $('.toggle').css('transform', 'translateX(1.4em) scale(0.8)');
    $('.toggle').css('transition', '500ms ease-in-out');
    setTimeout("toggleOff()", 550);
});

$(".title1").on('touchstart click', function () {
    if (panel1) {
        panel1 = false;
        $(".content1").removeClass;
        $(".content1").slideUp(500);
    } else {
        panel1 = true;
        $(".content1").addClass;
        $(".content1").slideDown(500);
    }    
});

$(".title2").on('touchstart click', function () {
    if (panel2) {
        panel2 = false;
        $(".content2").slideUp(500);
    } else {
        panel2 = true;
        $(".content2").slideDown(500);
    }
});

$(".title3").on('touchstart click', function () {
    if (panel3) {
        panel3 = false;
        $(".content3").slideUp(1000);
    } else {
        panel3 = true;
        $(".content3").slideDown(1000);
    }
});

$(".title4").on('touchstart click', function () {
    if (panel4) {
        panel4 = false;
        $(".content4").slideUp(500);
    } else {
        panel4 = true;
        $(".content4").slideDown(500);
    }
});

$(".title5").on('touchstart click', function () {
    if (panel5) {
        panel5 = false;
        $(".content5").slideUp(750);
    } else {
        panel5 = true;
        $(".content5").slideDown(750);
    }
});

$(".title6").on('touchstart click', function () {
    if (panel6) {
        panel6 = false;
        $(".content6").slideUp(750);
    } else {
        panel6 = true;
        $(".content6").slideDown(750);
    }
});

$(".plus").on('touchstart click', function () {
    if (plus) {
        plus = false;
        $('#container').css('visibility', 'visible');
        $('#container').css('pointer-events', 'initial');
        $('#item0').css('transition', '500ms all');
        $('#item0').css('transform', 'translate(-50%, -50%) scale(1)');
        $('#item0').css('visibility', 'visible');
        $('#item0').css('opacity', '1');
    } else {
        plus = true;
        $('#container').css('visibility', 'hidden');
        $('#container').css('pointer-events', 'none');
        $('#item0').css('transition', '250ms all');
        $('#item0').css('transform', 'translate(-50%, -50%) scale(0)');
        $('#item0').css('visibility', 'hidden');
        $('#item0').css('opacity', '0');
    }
});

$(".clear").on('touchstart click', function () {
    if (plus) {
        plus = false;
        $('#container').css('visibility', 'visible');
        $('#container').css('pointer-events', 'initial');
        $('#item0').css('transition', '500ms all');
        $('#item0').css('transform', 'translate(-50%, -50%) scale(1)');
        $('#item0').css('visibility', 'visible');
    } else {
        plus = true;
        $('#container').css('visibility', 'hidden');
        $('#container').css('pointer-events', 'none');
        $('#item0').css('transition', '250ms all');
        $('#item0').css('transform', 'translate(-50%, -50%) scale(0)');
        $('#item0').css('visibility', 'hidden');
    }
});

function mute() {
    if (muteSound) {
        muteSound = false;
        sound1.play();
        document.getElementById('sound').src = "./src/assets/ui/son.png";

        $('#sound').css('src',);
    } else {
        muteSound = true;
        sound1.stop();
        document.getElementById('sound').src = "./src/assets/ui/soff.png";
    }
}

function reportWindowSize() {
    resize();
}

 function resize() {
    var height = document.getElementById('item0').offsetHeight;
    var width = document.getElementById('item0').offsetWidth;

    $('.content7').css('height', height);
    $('.content7').css('width', width)
    $('.content7').css('max-height', '80%');
    $('canvas').css('transition', '500ms ease-in-out');
    $('canvas').css('max-height', '80%');
    $('canvas').css('height', '100%');
    $('canvas').css('width', 'auto')
}

function scrollbar() {
    $("#menu, .content7").mCustomScrollbar({
        scrollbarPosition: "outside",
        autoHideScrollbar: "true",
        theme: "minimal-dark",
        scrollInertia: 200
    });
}
