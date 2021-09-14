let idGen = Math.floor(Math.random() * 3000000000000000000) + 1;
let battleStart = false;

function fight() {
    battleStart = true;
    console.clear();
    let number = 0;

    let iniNA1 = document.getElementById('NA1').value;
    let iniNA2 = document.getElementById('NA2').value;

    let iniINI1 = document.getElementById('INI1').value;
    let iniINI2 = document.getElementById('INI2').value;

    classes();
    save();
    console.time('time');

    document.getElementById("resultContent").innerHTML = "";
    document.getElementById("result2Content").innerHTML = "";

    function start() {
        $("#resultContent").append("<h2>Début du combat</h2>" + "<h2>◈</h2>").hide().slideDown(100);
        newRound();
        ini();
        id();
    }

    function newRound() {
        number = number + 1;
        $("#resultContent").append("<h3> Tour " + number + "</h3>" + "<br>").hide().slideDown(3000);
    }

    function ini() {

        let dini = Math.floor(Math.random() * 20) + 1;

        let resultini = "Jet d'initiative : " + dini + "<br>";

        if ((number == 1 & degainerJ1.checked == true)) {
            INI1.value = (parseInt(iniINI1) + 1);
        } else if (number >= 2) {
            INI1.value = (parseInt(iniINI1));
        }

        if ((number == 1 & degainerJ2.checked == true)) {
            INI2.value = (parseInt(iniINI2) + 1);
        } else if (number >= 2) {
            INI2.value = (parseInt(iniINI2));
        }

        if (parseInt(INI1.value) === parseInt(INI2.value)) {

            $("#resultContent").append(cName1 + " et " + cName2 + " ont le même score d'INI : " + INI1.value + "<br>" +
                resultini).slideDown(3000);

            if (dini < 10) {
                if (parseInt(PV1.value) <= 0 || parseInt(PV2.value) <= 0) {
                    return false;
                }
                $("#resultContent").append(cName1 + " a l'initiative" + "<br>" + "<br>").slideDown(3000);
                att1();
            } else if (dini >= 10) {
                if (parseInt(PV1.value) <= 0 || parseInt(PV2.value) <= 0) {
                    return false;
                }
                $("#resultContent").append(cName2 + " a l'initiative" + "<br>" + "<br>").slideDown(3000);
                att2();
            }
        }

        if (parseInt(INI1.value) >= parseInt(INI2.value)) {
            if (parseInt(PV1.value) <= 0 || parseInt(PV2.value) <= 0) {
                return false;
            }
            $("#resultContent").append(cName1 + " a l'initiative: " + "INI " + INI1.value + "<br>" + "<br>").slideDown(3000);
            att1();

        } else if (parseInt(INI1.value) < parseInt(INI2.value)) {
            if (parseInt(PV1.value) <= 0 || parseInt(PV2.value) <= 0) {
                return false;
            }
            $("#resultContent").append(cName2 + " a l'initiative: " + "INI " + INI2.value + "<br>" + "<br>").slideDown(3000);
            att2();
        }
    }

    function loc1() {
        let dloc1 = Math.floor(Math.random() * 20) + 1;

        let locres = "";
        let locres1 = "la tête";
        let locres2 = "les bras";
        let locres3 = "les jambes";
        let locres4 = "le torse";

        let resultLoc = "Jet de localisation : " + dloc1 + "<br>";

        if (dloc1 <= 2) {
            locres = locres1;
        } else if (dloc1 > 2 && dloc1 <= 7) {
            locres = locres2;
        } else if (dloc1 > 7 && dloc1 <= 11) {
            locres = locres3;
        } else if (dloc1 > 11) {
            locres = locres4;
        }

        $("#resultContent").append(resultLoc + cName1 + " vise : " + locres + "<br>").slideDown(3000);
    }

    function loc2() {
        let dloc2 = Math.floor(Math.random() * 20) + 1;

        let locres = "";
        let locres1 = "la tête";
        let locres2 = "les bras";
        let locres3 = "les jambes";
        let locres4 = "le torse";

        let resultLoc = "Jet de localisation : " + dloc2 + "<br>";

        if (dloc2 <= 2) {
            locres = locres1;
        } else if (dloc2 > 2 && dloc2 <= 7) {
            locres = locres2;
        } else if (dloc2 > 7 && dloc2 <= 11) {
            locres = locres3;
        } else if (dloc2 > 11) {
            locres = locres4;
        }

        $("#resultContent").append(resultLoc + cName2 + " vise : " + locres + "<br>").slideDown(3000);
    }

    function att1() {
        damage1();
        let d1 = Math.floor(Math.random() * 20) + 1;
        let d2 = Math.floor(Math.random() * 20) + 1;
        let d3 = Math.floor(Math.random() * 20) + 1;

        let d5 = Math.floor(Math.random() * 20) + 1;

        let d7 = Math.floor(Math.random() * 8) + 1;
        let d8 = Math.floor(Math.random() * 8) + 1;
        let d9 = (((FOR1.value * 2) + dmgJ1) - END2.value - d8); // Formule dégats avec parade réussie
        let d10 = (((FOR1.value * 2) + dmgJ1) - END2.value - d8); // Formule dégats avec parade/esquive ratée

        let sucess1 = d1 + " réussi";
        var rSucess1 = sucess1.fontcolor("green");

        let failure1 = d1 + " échec";
        var rFailure1 = failure1.fontcolor("red");

        let sucess2 = d2 + " réussi";
        var rSucess2 = sucess2.fontcolor("green");

        let failure2 = d2 + " échec";
        var rFailure2 = failure2.fontcolor("red");

        let sucess3 = d3 + " réussi";
        var rSucess3 = sucess3.fontcolor("green");

        let failure3 = d3 + " échec";
        var rFailure3 = failure3.fontcolor("red");

        if (d1 < ATT1.value) {
            var resultr1 = rSucess1;
        } else {
            var resultr1 = rFailure1;
        }

        if (d2 < PAR2.value) {
            var resultr2 = rSucess2;
        } else {
            var resultr2 = rFailure2;
        }

        if (d3 < HAB2.value) {
            var resultr3 = rSucess3;
        } else {
            var resultr3 = rFailure3;
        }

        if (parseInt(PV1.value) <= 0) {
            return;
        }
        if (parseInt(PV2.value) <= 0) {
            return;
        }
        $("#resultContent").append(cName1 + " tente d'attaquer: " + "ATT " + ATT1.value + " (NA restants : " + (NA1.value = ((NA1.value) - 1)) + ")" + "<br>" + resultr1 + "<br>").slideDown(3000);

        if (d1 < ATT1.value) {
            loc1();
            if (EsquiveJ2.checked == true) {
                $("#resultContent").append(cName2 + " tente d'esquiver: " + "HAB " + HAB2.value + " (NA restants : " + (NA2.value = ((NA2.value) - 0.5)) + ")" + "<br>" + resultr3 + "<br>").slideDown(3000);

                if (d3 < HAB2.value) { // esquive réussie
                    void (0);
                } else { // esquive ratée
                    $("#resultContent").append(cName2 + " perd " + d9 + " Pvs." + "<br>" +
                        " Pvs restants : " + (PV2.value = ((PV2.value) - d9)) + "<br>" + "<br>").slideDown(3000);
                }

            } else if (EsquiveJ2.checked == false) {
                $("#resultContent").append(cName2 + " tente de parer: " + "PAR " + PAR2.value + " (NA restants : " + (NA2.value = ((NA2.value) - 0.5)) + ")" + "<br>" + resultr2 + "<br>").slideDown(3000);

                if (d3 < PAR2.value) { // parade réussie
                    $("#resultContent").append(cName2 + " perd " + d9 + " Pvs." + "<br>" +
                        " Pvs restants : " + (PV2.value = ((PV2.value) - d9)) + "<br>" + "<br>").slideDown(3000);
                } else { // parade ratée
                    $("#resultContent").append(cName2 + " perd " + d9 + " Pvs." + "<br>" +
                        " Pvs restants : " + (PV2.value = ((PV2.value) - d9)) + "<br>" + "<br>").slideDown(3000);
                }
            }
            rounds();
            att2();
        } else {
            rounds();
            att2();
        }
    }

    function att2() {

        let d3 = Math.floor(Math.random() * 20) + 1;
        let d4 = Math.floor(Math.random() * 20) + 1;

        let d5 = new dice20()["rand"];

        let d7 = new dice8()["rand"];
        let d8 = new dice8()["rand"];
        let d9 = (((FOR1.value * 2) + d5 + d7) - END2.value - d8); // Formule dégats simples 1

        let sucess3 = d3 + " réussi";
        var rSucess3 = sucess3.fontcolor("green");

        let failure3 = d3 + " échec";
        var rFailure3 = failure3.fontcolor("red");

        let sucess4 = d4 + " réussi";
        var rSucess4 = sucess4.fontcolor("green");

        let failure4 = d4 + " échec";
        var rFailure4 = failure4.fontcolor("red");

        if (d3 < ATT2.value) {
            var resultr3 = rSucess3;
        } else {
            var resultr3 = rFailure3;
        }

        if (d4 < PAR1.value) {
            var resultr4 = rSucess4;
        } else {
            var resultr4 = rFailure4;
        }

        if (parseInt(PV1.value) <= 0) {
            return;
        }
        if (parseInt(PV2.value) <= 0) {
            return;
        }
        $("#resultContent").append(cName2 + " tente d'attaquer: " + "ATT " + ATT2.value + " (NA restants : " + (NA2.value = ((NA2.value) - 1)) + ")" + "<br>" + resultr3 + "<br>").slideDown(3000);
        if (d3 < ATT2.value) {
            $("#resultContent").append(cName1 + " tente de parer: " + "PAR " + PAR1.value + "<br>" + resultr4 + "<br>" +
                cName1 + " perd " + d9 + " Pvs." + "<br>" +
                " Pvs restants : " + (PV1.value = ((PV1.value) - d9)) + "<br>" + "<br>").slideDown(3000);
            rounds();
            att1();
        } else {
            rounds();
            att1();
        }
    }

    function rounds() {

        if ((parseInt(NA1.value) == 0) & (parseInt(NA2.value) == 0)) {
            $("#resultContent").append("<h3>Fin du tour</h3>" + "<h3>◈</h3>").slideDown(3000);
            NA1.value = iniNA1;
            NA2.value = iniNA2;
            newRound();
            ini();
        }
    }

    function last1() {
        let berserker1 = document.getElementById("berserkerJ1");

        if ((berserker1.checked == true) & (parseInt(PV1.value) <= 0)) {
            $("#resultContent").append(cName1 + " tente d'attaquer une dernière fois: " + "ATT " + ATT1.value + " (NA restants : " + (NA1.value = ((NA1.value) - 1)) + ")" + "<br>" + resultr1 + "<br>").slideDown(3000);
            if (d1 < ATT1.value) {
                $("#resultContent").append(cName2 + " tente de parer: " + "PAR " + PAR2.value + "<br>" + resultr2 + "<br>" +
                    cName2 + " perd " + d9 + " Pvs." + "<br>" +
                    " Pvs restants : " + (PV2.value = ((PV2.value) - d9)) + "<br>" + "<br>").slideDown(3000);
            } else {
                return;
            }
        }
    }

    function last2() {
        let berserker2 = document.getElementById("berserkerJ2");

        if ((berserker2.checked == true) & (parseInt(PV2.value) <= 0)) {
            $("#resultContent").append(cName2 + " tente d'attaquer une dernière fois: " + "ATT " + ATT2.value + " (NA restants : " + (NA2.value = ((NA2.value) - 1)) + ")" + "<br>" + resultr3 + "<br>").slideDown(3000);
            if (d3 < ATT2.value) {
                $("#resultContent").append(cName1 + " tente de parer: " + "PAR " + PAR1.value + "<br>" + resultr4 + "<br>" +
                    cName1 + " perd " + d9 + " Pvs." + "<br>" +
                    " Pvs restants : " + (PV1.value = ((PV1.value) - d9)) + "<br>" + "<br>").slideDown(3000);
            } else {
                return;
            }
        }
    }

    start();
    outcome();
    last1();
    last2();
    console.timeEnd('time');
}

function check() {
    if (parseInt(PV1.value) <= 0 || parseInt(PV2.value) <= 0) {
        return false;
    }
}

function outcome() {
    if (parseInt(PV1.value) <= 0) {
        $("#resultContent").append("<h2>◈ Fin du combat ◈</h2>" + "<br>").slideDown(3000);
        $("#result2Content").append(cName1 + " n'a plus de Pvs." + "<br>" +
            cName1 + " est K-O." + "<br>" +
            cName2 + " remporte la victoire!").hide().delay(2500).slideDown(500);
        return;
    } else if (parseInt(PV2.value) <= 0) {
        $("#resultContent").append("<h2>◈ Fin du combat ◈<h2>" + "<br>").slideDown(3000);
        $("#result2Content").append(cName2 + " n'a plus de Pvs." + "<br>" +
            cName2 + " est K-O." + "<br>" +
            cName1 + " remporte la victoire!").hide().delay(2500).slideDown(500);
        return;
    }
}