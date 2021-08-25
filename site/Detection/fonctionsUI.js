let uiToggle = true;
let blocToggle = true;
let lightToggle = true;
let slideToggle = true;

function reportWindowSize() {
  cross();
}

window.onresize = reportWindowSize;
window.addEventListener('resize', reportWindowSize);

$('.toggle').on('touchstart click', function() {

    if (uiToggle) {
        uiToggle = false;
        $('#light').css('visibility', 'visible');
        $('#blocLight').css('visibility', 'visible');
        $('#backfond').css('filter', 'invert(1)');
        $('.button14').css('background-color', '#0a0a23');
        $('.button14').css('color', '#0a0a23');
        $('.button15').css('background-color', '#000d29');
        $('.button15').css('color', '#000d29');
        $('.button16').css('background-color', '#000e22');
        $('.button16').css('color', '#000e22');

        $('.button17').css('background-color', '#b7c7d3');
        $('.button17').css('color', '#b7c7d3');
        $('.button18').css('background-color', '#69acc2');
        $('.button18').css('color', '#69acc2');
        $('.button19').css('background-color', '#428dba');
        $('.button19').css('color', '#428dba');

        $('.button20').css('filter', 'contrast(1) invert(1)');
        $('.file-input').css('filter', 'invert(1)');
        $('#item3').css('background-color', '#4d5059');

        $('#minimg1').css('filter', 'invert(1)');
        $('#minimg2').css('filter', 'invert(1)');
        $('#minimg3').css('filter', 'invert(1)');
        $('#minimg4').css('filter', 'invert(1)');
        $('#minimg5').css('filter', 'invert(1)');
        $('#minimg6').css('filter', 'invert(1)');
        $('#minimg7').css('filter', 'invert(1)');
        $('#minimg8').css('filter', 'invert(1)');
        $('#textarea').css('filter', 'invert(1)');
        $('#icon5').css('filter', 'grayscale(0.5) invert(1)');


    } else {
        uiToggle = true;
        $('#light').css('visibility', 'hidden');
        $('#blocLight').css('visibility', 'hidden');
        $('#backfond').css('filter', 'invert(0)');
        $('.button14').css('background-color', '#f5f5dc');
        $('.button14').css('color', '#f5f5dc');
        $('.button15').css('background-color', '#fff2d6');
        $('.button15').css('color', '#fff2d6');
        $('.button16').css('background-color', '#fff1dd');
        $('.button16').css('color', '#fff1dd');

        $('.button17').css('background-color', '#48382c');
        $('.button17').css('color', '#48382c');
        $('.button18').css('background-color', '#96533d');
        $('.button18').css('color', '#96533d');
        $('.button19').css('background-color', '#bd7245');
        $('.button19').css('color', '#bd7245');

        $('.button20').css('filter', 'contrast(1) invert(0)');
        $('.file-input').css('filter', 'invert(0)');
        $('#item3').css('background-color', '#17181c');

        $('#minimg1').css('filter', 'invert(0)');
        $('#minimg2').css('filter', 'invert(0)');
        $('#minimg3').css('filter', 'invert(0)');
        $('#minimg4').css('filter', 'invert(0)');
        $('#minimg5').css('filter', 'invert(0)');
        $('#minimg6').css('filter', 'invert(0)');
        $('#minimg7').css('filter', 'invert(0)');
        $('#minimg8').css('filter', 'invert(0)');
        $('#textarea').css('filter', 'invert(0)');
        $('#icon5').css('filter', 'grayscale(0.5) invert(0)');

    }

    if (blocToggle) {
        blocToggle = true;
        $('#blocLight').css('visibility', 'hidden');
    }
});

function shutDown() {
    $('#blocs').css('visibility', 'hidden');
    blocToggle = true;
}

function toggle() {
    if (blocToggle) {
        blocToggle = false;
        $('#blocs').css('visibility', 'visible');

    } else {
        blocToggle = true;
        $('#blocs').css('visibility', 'hidden');
    }
}

function translateUI() {
    if (slideToggle) {
        slideToggle = false;
        $('#bloctop').css('transform', 'translateY(-2.5em)');
        $('#bloctop').css('transition', '500ms ease-in-out');
        $('#blocleft').css('transform', 'translateX(-6em)');
        $('#blocleft').css('transition', '500ms ease-in-out');
        $('#blocfond').css('top', '-3em');
        $('#blocfond').css('left', '-3em');
        $('#blocfond').css('right', '-3em');
        $('#blocfond').css('bottom', '-3em');
        $('#blocfond').css('transition', '500ms ease-in-out');
        $('.button23').css('transform', 'translateY(-3em)');
        $('.button23').css('transition', '500ms ease-in-out');

    } else {
        slideToggle = true;
        $('#bloctop').css('transform', 'translateY(0em)');
        $('#bloctop').css('transition', '500ms ease-in-out');
        $('#blocleft').css('transform', 'translateX(0em)');
        $('#blocleft').css('transition', '500ms ease-in-out');
        $('#blocfond').css('top', '2.5em');
        $('#blocfond').css('left', '7em');
        $('#blocfond').css('right', '1em');
        $('#blocfond').css('bottom', '1em');
        $('#blocfond').css('transition', '500ms ease-in-out');
        $('.button23').css('transform', 'translateY(0em)');
        $('.button23').css('transition', '500ms ease-in-out');
    }
}

function loaded() {
    $('#loader').css('display', 'none');
    $('#loading').css('display', 'none');
}

function cross() {
    setTimeout(function() {

        var height = document.getElementById('fond').offsetHeight;
        var width = document.getElementById('fond').offsetWidth;

        $('#container').css('height', height);
        $('#container').css('width', width);
        $('#container').css('max-height', '90%');
        $('#container').css('max-width', '90%');
        $('.clear').css('visibility', 'visible');
    }, 100);
}

function clear() {
    if (document.getElementById('fond').src == "") {
        $('#backfond').css('visibility', 'visible');
    } else {
        $('#backfond').css('visibility', 'hidden');
    }
}