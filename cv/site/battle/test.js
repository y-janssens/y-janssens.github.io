


function loc1() {
    let d1 = Math.floor(Math.random() * 20) + 1;

    let locres = "";
    let locres1 = "la tête";
    let locres2 = "les bras";
    let locres3 = "les jambes";
    let locres4 = "le torse";

    let resultLoc = "Jet de localisation : " + d1 + "<br>";
    
    if (d1 <= 2) {
        locres = locres1;
    } else if (d1 > 2 && d1 <= 7) {
        locres = locres2;
    } else if (d1 > 7 && d1 <= 11) {
        locres = locres3;
    } else if (d1 > 11) {
        locres = locres4;
    }

    $("#resultContent").append(resultLoc + "Péon" + " vise : " + locres + "<br>").slideDown(3000);
}


window.onload = loc1();