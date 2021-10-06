let shrink_img1 = true;
let img1_focus = false;

let shrink_img2 = true;
let img2_focus = false;

let shrink_img3 = true;
let img3_focus = false;

let shrink_img4 = true;
let img4_focus = false;

let shrink_img5 = true;
let img5_focus = false;

let shrink_img6 = true;
let img6_focus = false;

let shrink_img7 = true;
let img7_focus = false;

let shrink_img9 = true;
let img9_focus = false;

let shrink_img10 = true;
let img10_focus = false;

let shrink_img11 = true;
let img11_focus = false;

let shrink_img12 = true;
let img12_focus = false;

let shrink_img13 = true;
let img13_focus = false;

let shrink_img14 = true;
let img14_focus = false;

function shrink1() {

    if (shrink_img1) {
        shrink_img1 == false;
        $('#container').css('visibility', 'visible');
        $('#container').css('pointer-events', 'initial');
        $('#img1').css('transition', '500ms all');
        $('#img1').css('transform', 'translate(-50%, -50%) scale(1)');
        $('#img1').css('opacity', '1');
        $('#img1').css('visibility', 'visible');
        $('.descri1').css('transition', '500ms all');
        $('.descri1').css('transform', 'translate(-50%, -50%) scale(1)');
        $('.descri1').css('visibility', 'visible');
        tooltip();

    } else {
        shrink_img1 == true;
    }
    $('#container').on('touchstart click', function () {
        $('#container').css('visibility', 'hidden');
        $('#container').css('pointer-events', 'none');
        $('#img1').css('transition', '250ms all');
        $('#img1').css('transform', 'translate(-50%, -50%) scale(0)');
        $('#img1').css('opacity', '0');
        $('#img1').css('visibility', 'hidden');
        $('.descri1').css('transition', '250ms all');
        $('.descri1').css('transform', 'translate(-50%, -50%) scale(0)');
        $('.descri1').css('visibility', 'hidden');
    });
}

function shrink2() {

    if (shrink_img2) {
        shrink_img2 == false;
        $('#container').css('visibility', 'visible');
        $('#container').css('pointer-events', 'initial');
        $('#img2').css('transition', '500ms all');
        $('#img2').css('transform', 'translate(-50%, -50%) scale(1)');
        $('#img2').css('opacity', '1');
        $('#img2').css('visibility', 'visible');
        $('.descri2').css('transition', '500ms all');
        $('.descri2').css('transform', 'translate(-50%, -50%) scale(1)');
        $('.descri2').css('visibility', 'visible');
        tooltip();
    } else {
        shrink_img2 == true;
    }
    $('#container').on('touchstart click', function () {
        $('#container').css('visibility', 'hidden');
        $('#container').css('pointer-events', 'none');
        $('#img2').css('transition', '250ms all');
        $('#img2').css('transform', 'translate(-50%, -50%) scale(0)');
        $('#img2').css('opacity', '0');
        $('#img2').css('visibility', 'hidden');
        $('.descri2').css('transition', '250ms all');
        $('.descri2').css('transform', 'translate(-50%, -50%) scale(0)');
        $('.descri2').css('visibility', 'hidden');
    });
}

function shrink3() {

    if (shrink_img3) {
        shrink_img3 == false;
        $('#container').css('visibility', 'visible');
        $('#container').css('pointer-events', 'initial');
        $('#img3').css('transition', '500ms all');
        $('#img3').css('transform', 'translate(-50%, -50%) scale(1)');
        $('#img3').css('opacity', '1');
        $('#img3').css('visibility', 'visible');
        $('.descri3').css('transition', '500ms all');
        $('.descri3').css('transform', 'translate(-50%, -50%) scale(1)');
        $('.descri3').css('visibility', 'visible');
        tooltip();
    } else {
        shrink_img3 == true;
    }
    $('#container').on('touchstart click', function () {
        $('#container').css('visibility', 'hidden');
        $('#container').css('pointer-events', 'none');
        $('#img3').css('transition', '250ms all');
        $('#img3').css('transform', 'translate(-50%, -50%) scale(0)');
        $('#img3').css('opacity', '0');
        $('#img3').css('visibility', 'hidden');
        $('.descri3').css('transition', '250ms all');
        $('.descri3').css('transform', 'translate(-50%, -50%) scale(0)');
        $('.descri3').css('visibility', 'hidden');
    });
}

function shrink4() {
    if (shrink_img4) {
        shrink_img4 == false;
        $('#container').css('visibility', 'visible');
        $('#container').css('pointer-events', 'initial');
        $('#img4').css('transition', '500ms all');
        $('#img4').css('transform', 'translate(-50%, -50%) scale(1)');
        $('#img4').css('opacity', '1');
        $('#img4').css('visibility', 'visible');
        $('.descri4').css('transition', '500ms all');
        $('.descri4').css('transform', 'translate(-50%, -50%) scale(1)');
        $('.descri4').css('visibility', 'visible');
        tooltip();
    } else {
        shrink_img4 == true;
    }
    $('#container').on('touchstart click', function () {
        $('#container').css('visibility', 'hidden');
        $('#container').css('pointer-events', 'none');
        $('#img4').css('transition', '250ms all');
        $('#img4').css('transform', 'translate(-50%, -50%) scale(0)');
        $('#img4').css('opacity', '0');
        $('#img4').css('visibility', 'hidden');
        $('.descri4').css('transition', '250ms all');
        $('.descri4').css('transform', 'translate(-50%, -50%) scale(0)');
        $('.descri4').css('visibility', 'hidden');
    });
}

function shrink5() {

    if (shrink_img5) {
        shrink_img5 == false;
        $('#container').css('visibility', 'visible');
        $('#container').css('pointer-events', 'initial');
        $('#img5').css('transition', '500ms all');
        $('#img5').css('transform', 'translate(-50%, -50%) scale(1)');
        $('#img5').css('opacity', '1');
        $('#img5').css('visibility', 'visible');
        $('.descri5').css('transition', '500ms all');
        $('.descri5').css('transform', 'translate(-50%, -50%) scale(1)');
        $('.descri5').css('visibility', 'visible');
        tooltip();
    } else {
        shrink_img5 == true;
    }
    $('#container').on('touchstart click', function () {
        $('#container').css('visibility', 'hidden');
        $('#container').css('pointer-events', 'none');
        $('#img5').css('transition', '250ms all');
        $('#img5').css('transform', 'translate(-50%, -50%) scale(0)');
        $('#img5').css('opacity', '0');
        $('#img5').css('visibility', 'hidden');
        $('.descri5').css('transition', '250ms all');
        $('.descri5').css('transform', 'translate(-50%, -50%) scale(0)');
        $('.descri5').css('visibility', 'hidden');
    });
}

function shrink6() {

    if (shrink_img6) {
        shrink_img6 == false;
        $('#container').css('visibility', 'visible');
        $('#container').css('pointer-events', 'initial');
        $('#img6').css('transition', '500ms all');
        $('#img6').css('transform', 'translate(-50%, -50%) scale(1)');
        $('#img6').css('opacity', '1');
        $('#img6').css('visibility', 'visible');
        $('.descri6').css('transition', '500ms all');
        $('.descri6').css('transform', 'translate(-50%, -50%) scale(1)');
        $('.descri6').css('visibility', 'visible');
        tooltip();
    } else {
        shrink_img6 == true;
    }
    $('#container').on('touchstart click', function () {
        $('#container').css('visibility', 'hidden');
        $('#container').css('pointer-events', 'none');
        $('#img6').css('transition', '250ms all');
        $('#img6').css('transform', 'translate(-50%, -50%) scale(0)');
        $('#img6').css('opacity', '0');
        $('#img6').css('visibility', 'hidden');
        $('.descri6').css('transition', '250ms all');
        $('.descri6').css('transform', 'translate(-50%, -50%) scale(0)');
        $('.descri6').css('visibility', 'hidden');
    });
}

function shrink7() {

    if (shrink_img7) {
        shrink_img7 == false;
        $('#container').css('visibility', 'visible');
        $('#container').css('pointer-events', 'initial');
        $('#img7').css('transition', '500ms all');
        $('#img7').css('transform', 'translate(-50%, -50%) scale(1)');
        $('#img7').css('opacity', '1');
        $('#img7').css('visibility', 'visible');
        $('.descri7').css('transition', '500ms all');
        $('.descri7').css('transform', 'translate(-50%, -50%) scale(1)');
        $('.descri7').css('visibility', 'visible');
        tooltip();
    } else {
        shrink_img7 == true;
    }
    $('#container').on('touchstart click', function () {
        $('#container').css('visibility', 'hidden');
        $('#container').css('pointer-events', 'none');
        $('#img7').css('transition', '250ms all');
        $('#img7').css('transform', 'translate(-50%, -50%) scale(0)');
        $('#img7').css('opacity', '0');
        $('#img7').css('visibility', 'hidden');
        $('.descri7').css('transition', '250ms all');
        $('.descri7').css('transform', 'translate(-50%, -50%) scale(0)');
        $('.descri7').css('visibility', 'hidden');
    });
}

function shrink9() {

    if (shrink_img9) {
        shrink_img9 == false;
        $('#container').css('visibility', 'visible');
        $('#container').css('pointer-events', 'initial');
        $('#battler').css('display', 'initial');
    } else {
        shrink_img9 == true;
    }
    $('#container').on('touchstart click', function () {
        $('#container').css('visibility', 'hidden');
        $('#container').css('pointer-events', 'none');
        $('#battler').css('display', 'none');
    });
}

function shrink10() {

    if (shrink_img10) {
        shrink_img10 == false;
        $('#container').css('visibility', 'visible');
        $('#container').css('pointer-events', 'initial');
        $('#clock').css('display', 'initial');
    } else {
        shrink_img10 == true;
    }
    $('#container').on('touchstart click', function () {
        $('#container').css('visibility', 'hidden');
        $('#container').css('pointer-events', 'none');
        $('#clock').css('display', 'none');
    });
}

function shrink11() {

    if (shrink_img11) {
        shrink_img11 == false;
        window.open('./site/Detection/index.html');
    } else {
        shrink_img11 == true;
    }
}

function shrink12() {

    if (shrink_img12) {
        shrink_img12 == false;
        window.open('./site/Herse/index.html');
        /* $('#container').css('visibility', 'visible');
        $('#container').css('pointer-events', 'initial');
        $('#container').css('cursor', 'pointer');
        $('#iframe2').css('transition', '500ms all');
        $('#iframe2').css('transform', 'translate(-50%, -50%)');
        $('#iframe2').css('opacity', '1');
        $('#iframe2').css('visibility', 'visible');
        $('#item12').css('transition', '500ms all');
        $('#item12').css('visibility', 'visible');
        $('#item12').css('transform', 'translate(-50%, -50%) scale(1)');
        $('#item12').css('opacity', '1'); */

    } else {
        shrink_img12 == true;
    }
    /* $('#container').on('touchstart click', function () {
        $('#container').css('visibility', 'hidden');
        $('#container').css('pointer-events', 'none');
        $('#container').css('cursor', 'initial');
        $('#iframe2').css('transition', '250ms all');
        $('#iframe2').css('transform', 'translate(-50%, -50%)');
        $('#iframe2').css('opacity', '0');
        $('#iframe2').css('visibility', 'hidden');
        $('#item12').css('transition', '500ms all');
        $('#item12').css('visibility', 'hidden');
        $('#item12').css('transform', 'translate(-50%, -50%) scale(0)');
        $('#item12').css('opacity', '0');
    }); */
}

function shrink13() {
    let vid1 = document.getElementById('vid1');

    if (shrink_img13) {
        shrink_img13 == false;
        $('#container').css('visibility', 'visible');
        $('#container').css('pointer-events', 'initial');
        $('#vid1').css('transition', '500ms all');
        $('#vid1').css('transform', 'translate(-50%, -50%) scale(1)');
        $('#vid1').css('opacity', '1');
        $('#vid1').css('visibility', 'visible');
        vid1.play();
        vid1.loop = true;

    } else {
        shrink_img13 == true;
    }
    $('#container').on('touchstart click', function () {
        $('#container').css('visibility', 'hidden');
        $('#container').css('pointer-events', 'none');
        $('#vid1').css('transition', '250ms all');
        $('#vid1').css('transform', 'translate(-50%, -50%) scale(0)');
        $('#vid1').css('opacity', '0');
        $('#vid1').css('visibility', 'hidden');

        vid1.pause();
        vid1.currentTime = 0;
    });
}

function shrink14() {
    let vid2 = document.getElementById('vid2');

    if (shrink_img14) {
        shrink_img14 == false;
        $('#container').css('visibility', 'visible');
        $('#container').css('pointer-events', 'initial');
        $('#vid2').css('transition', '500ms all');
        $('#vid2').css('transform', 'translate(-50%, -50%) scale(1)');
        $('#vid2').css('opacity', '1');
        $('#vid2').css('visibility', 'visible');
        vid2.play();
        vid2.loop = true;

    } else {
        shrink_img14 == true;
    }
    $('#container').on('touchstart click', function () {
        $('#container').css('visibility', 'hidden');
        $('#container').css('pointer-events', 'none');
        $('#vid2').css('transition', '250ms all');
        $('#vid2').css('transform', 'translate(-50%, -50%) scale(0)');
        $('#vid2').css('opacity', '0');
        $('#vid2').css('visibility', 'hidden');
        vid2.pause();
        vid2.currentTime = 0;
    });
}