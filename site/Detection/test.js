

/*let crossT = async function() {

var cross = document.getElementById('clear');
var height = document.getElementById('fond').height;
var width = document.getElementById('fond').width;
var cheight = window.scrollY + document.querySelector('.clear').getBoundingClientRect().top;
var cwidth = window.scrollX + document.querySelector('.clear').getBoundingClientRect().left;

console.log("fond", height, width);
console.log ("cross", cwidth, cheight);

cheight = width + '-20px';
cwidth = height + '-20px';
$('.clear').css('position', 'absolute' );
$('.clear').css('visibility', 'visible' );
$('.clear').css('top', height, '-20', 'px' );
$('.clear').css('left', width, '-20', 'px' );

}*/

let test = async function() {

    var height = document.getElementById('fond').offsetHeight;
    var width = document.getElementById('fond').offsetWidth;
    /*var cheight = document.getElementById('container').offsetHeight;
    var cwidth = document.getElementById('container').offsetWidth;*/

    /*cheight = height;
    cwidth = width;*/

    $('#container').css('height', height);
    $('#container').css('width', width);
    $('#container').css('max-height', '90%');
    $('#container').css('max-width', '90%');
    $('.clear').css('visibility', 'visible' );

    console.log("fond", width, height);
    //console.log ("container", cwidth, cheight);
    

}

//window.onload = test();


