let uiToggle = true;

function switchUI() {

    if(uiToggle) {
		uiToggle = false;    
    $('body').css('filter', 'grayscale(1)');
    $('h1').css('color', '#6c7b8e');
    $('h1:hover').css('color', '#8b9fb7');
    $('h2').css('color', '#6c7b8e');
    $('h3').css('color', '#6c7b8e');
    $('h4').css('color', '#6c7b8e');
    $('h5').css('color', '#6c7b8e');
    $('p').css('color', '#6c7b8e');
    $('input').css('filter', 'invert(1) contrast(1.5)');
    $('#classeJ1,#classeJ2,#fake,#fake2,#fake3').css('filter', 'invert(1) contrast(1.5)');
    $('input#c1,#c2,#c3,#c4,#c5').css('filter', 'grayscale(1)');
    $('table').css('color', '#6c7b8e');
    $('td').css('border', '1px solid #151515');
    $('#result').css('color', '#6c7b8e');
    $('#resultContent').css('color', '#6c7b8e');
    $('#result2').css('color', '#6c7b8e');
    $('#result3').css('color', '#6c7b8e');
    $('#result4').css('color', '#6c7b8e');
    $('#battler').css('background', 'url(./src/yNoKK6g.png)');
    $('#battler').css('background-size', '30%');
    $('#battler').css('background-color', '#2a3038');
    $('#battler').css('border', '1.5px solid rgba(108, 123, 142, 0.75)');
    $('#bann').css('border', '1.5px solid rgba(108, 123, 142, 0.75)');
    $('#result').css('border', '1.5px solid rgba(108, 123, 142, 0.75)');
    $('#result2').css('border', '1.5px solid rgba(108, 123, 142, 0.75)');
    $('#result3').css('border', '1.5px solid rgba(108, 123, 142, 0.75)');
    $('#corner1').css('filter', 'invert(1) drop-shadow(-4px 8px 8px rgba(0, 0, 0, 0.25))')
    $('#corner2').css('filter', 'invert(1) drop-shadow(-4px 8px 8px rgba(0, 0, 0, 0.25))')
    $('#corner3').css('filter', 'invert(1) drop-shadow(-4px 8px 8px rgba(0, 0, 0, 0.25))')
    $('#corner4').css('filter', 'invert(1) drop-shadow(-4px 8px 8px rgba(0, 0, 0, 0.25))')
    $('#ficon').css('filter', 'invert(1)');
    $('#sicon').css('filter', 'invert(1)');
    $('#d4').css('filter', 'invert(1)');
    $('#d6').css('filter', 'invert(1)');
    $('#d8').css('filter', 'invert(1)');
    $('#d10').css('filter', 'invert(1)');
    $('#d20').css('filter', 'invert(1)');
    $('#d100').css('filter', 'invert(1)');
    $('.reload').css('filter', 'invert(1)');
    

} else {
    uiToggle = true;
    $('body').css('filter', 'grayscale(0)');
    $('h1').css('color', '#938471');
    $('h2').css('color', '#938471');
    $('h3').css('color', '#938471');
    $('h4').css('color', '#938471');
    $('h5').css('color', '#938471');
    $('p').css('color', '#938471');
    $('input').css('filter', 'invert(0) contrast(1)');
    $('input#c1,#c2,#c3,#c4,#c5').css('filter', 'grayscale(1)');
    $('#classeJ1,#classeJ2,#fake,#fake2,#fake3').css('filter', 'invert(0) contrast(1)');
    $('table').css('color', '#938471');
    $('td').css('border', '1px solid black');
    $('#result').css('color', '#938471');
    $('#resultContent').css('color', '#938471');
    $('#result2').css('color', '#938471');
    $('#result3').css('color', '#938471');
    $('#result4').css('color', '#938471');
    $('#battler').css('background-image', 'url(./src/5aDIbZs.png)');
    $('#battler').css('background-size', '70%');
    $('#battler').css('border', '1.5px solid rgba(147, 132, 113, 0.75)');
    $('#bann').css('border', '1.5px solid rgba(147, 132, 113, 0.75)');
    $('#result').css('border', '1.5px solid rgba(147, 132, 113, 0.75)');
    $('#result2').css('border', '1.5px solid rgba(147, 132, 113, 0.75)');
    $('#result3').css('border', '1.5px solid rgba(147, 132, 113, 0.75)');
    $('#corner1').css('filter', 'invert(0) drop-shadow(-4px 8px 8px rgba(0, 0, 0, 0.25))')
    $('#corner2').css('filter', 'invert(0) drop-shadow(-4px 8px 8px rgba(0, 0, 0, 0.25))')
    $('#corner3').css('filter', 'invert(0) drop-shadow(-4px 8px 8px rgba(0, 0, 0, 0.25))')
    $('#corner4').css('filter', 'invert(0) drop-shadow(-4px 8px 8px rgba(0, 0, 0, 0.25))')
    $('#ficon').css('filter', 'invert(0)');
    $('#sicon').css('filter', 'invert(0)');
    $('#d4').css('filter', 'invert(0)');
    $('#d6').css('filter', 'invert(0)');
    $('#d8').css('filter', 'invert(0)');
    $('#d10').css('filter', 'invert(0)');
    $('#d20').css('filter', 'invert(0)');
    $('#d100').css('filter', 'invert(0)');
    $('.reload').css('filter', 'invert(0)');
}
}

// Invert
// 6c7b8e
// rgba(108, 123, 142, 0.75)


// Orig
// 938471
// rgba(147, 132, 113, 0.75)