


    function loc1() {
        let d1 = Math.floor(Math.random() * 20) + 1;
    
        let locres = "";
        let resultLoc = "Jet de localisation : " + d1 +"<br>";
        console.log("fouet");
        if (d1 <= 2) {
            locres = "la tête"
        } else if (d1 > 2 && d1 <= 7) {
            locres = "les bras"
        } else if (d1 > 7 && d1 <= 11) {
            locres = "les jambes"
        } else if (d1 > 11) {
            locres = "le torse"
        }
        
        $("#resultContent").append(resultLoc+ "Péon" + " vise : " + locres + "<br>").slideDown(3000);
    
    }

    window.onload = loc1();