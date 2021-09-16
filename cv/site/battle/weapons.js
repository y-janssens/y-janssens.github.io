
function weapons() {
    let d4 = Math.floor(Math.random() * 4) + 1;
    let d6 = Math.floor(Math.random() * 6) + 1;
    let d8 = Math.floor(Math.random() * 8) + 1;
    let d10 = Math.floor(Math.random() * 10) + 1;

    epee = [(14 + d8), 8];
    epeelongue = [(16 + d8), 12];
    dague = [(12 + d6), 6];
    gantelet = [(6 + d6), 2];
    marteau = [(10 + d8), 4];
    pioche = [(10 + d6), 6];
    fleau = [(16 + d6), 5];
    gourdin = [(10 + d8), 4];
    hache = [(14 + d6), 8];
    masse = [(14 + d6), 8];
    faux = [(10 + d6), 8];
    marteauguerre = [(18 + d8), 6];
    bec = [(18 + d10), 10];
    hachedeux = [(22 + d10), 10];
    estramacon = [(20 + d10), 10];
    vouge = [(14 + d6), 8];
    hallebarde = [(18 + d8), 8];
    pique = [(18 + d8), 10];
    lance = [(22 + d10), 2];
    rondache = [(4 + d6), 14];
    bouclier = [(6 + d6), 16];
    poings = [(4 + d4), 1];
}

function damage() {
    weapons();
    let shieldJ1 = false;

    if (epeeJ1.checked == true) {
        weaponJ1 = epee;
    } else if (epeelongueJ1.checked == true) {
        weaponJ1 = epeelongue;
    } else if (dagueJ1.checked == true) {
        weaponJ1 = dague;
    } else if (GanteletJ1.checked == true) {
        weaponJ1 = gantelet;
    } else if (MarteauJ1.checked == true) {
        weaponJ1 = marteau;
    } else if (PiocheJ1.checked == true) {
        weaponJ1 = pioche;
    } else if (FléauJ1.checked == true) {
        weaponJ1 = fleau;
    } else if (GourdinJ1.checked == true) {
        weaponJ1 = gourdin;
    } else if (HacheJ1.checked == true) {
        weaponJ1 = hache;
    } else if (MasseJ1.checked == true) {
        weaponJ1 = masse;
    } else if (FauxJ1.checked == true) {
        weaponJ1 = faux;
    } else if (MarteauguerreJ1.checked == true) {
        weaponJ1 = marteauguerre;
    } else if (BecJ1.checked == true) {
        weaponJ1 = bec;
    } else if (HachedeuxJ1.checked == true) {
        weaponJ1 = hachedeux;
    } else if (EstramaconJ1.checked == true) {
        weaponJ1 = estramacon;
    } else if (VougeJ1.checked == true) {
        weaponJ1 = vouge;
    } else if (HallebardeJ1.checked == true) {
        weaponJ1 = hallebarde;
    } else if (PiqueJ1.checked == true) {
        weaponJ1 = pique;
    } else if (LanceJ1.checked == true) {
        weaponJ1 = lance;
    } else {
        weaponJ1 = poings;
    }

    if (rondacheJ1.checked == true) {
        shieldJ1 = true;
        parweaponJ1 = rondache;
        parJ1 = parseInt(parweaponJ1[1]);
    } else if (BouclierJ1.checked == true) {
        shieldJ1 = true;
        parweaponJ1 = bouclier;
        parJ1 = parseInt(parweaponJ1[1]);
    } else {
        shieldJ1 = false;
        parJ1 = parseInt(weaponJ1[1]);
    }

    dmgJ1 = parseInt(weaponJ1[0]);

    let shieldJ2 = false;

    if (epeeJ2.checked == true) {
        weaponJ2 = epee;
    } else if (epeelongueJ2.checked == true) {
        weaponJ2 = epeelongue;
    } else if (dagueJ2.checked == true) {
        weaponJ2 = dague;
    } else if (GanteletJ2.checked == true) {
        weaponJ2 = gantelet;
    } else if (MarteauJ2.checked == true) {
        weaponJ2 = marteau;
    } else if (PiocheJ2.checked == true) {
        weaponJ2 = pioche;
    } else if (FléauJ2.checked == true) {
        weaponJ2 = fleau;
    } else if (GourdinJ2.checked == true) {
        weaponJ2 = gourdin;
    } else if (HacheJ2.checked == true) {
        weaponJ2 = hache;
    } else if (MasseJ2.checked == true) {
        weaponJ2 = masse;
    } else if (FauxJ2.checked == true) {
        weaponJ2 = faux;
    } else if (MarteauguerreJ2.checked == true) {
        weaponJ2 = marteauguerre;
    } else if (BecJ2.checked == true) {
        weaponJ2 = bec;
    } else if (HachedeuxJ2.checked == true) {
        weaponJ2 = hachedeux;
    } else if (EstramaconJ2.checked == true) {
        weaponJ2 = estramacon;
    } else if (VougeJ2.checked == true) {
        weaponJ2 = vouge;
    } else if (HallebardeJ2.checked == true) {
        weaponJ2 = hallebarde;
    } else if (PiqueJ2.checked == true) {
        weaponJ2 = pique;
    } else if (LanceJ2.checked == true) {
        weaponJ2 = lance;
    } else {
        weaponJ2 = poings;
    }

    if (rondacheJ2.checked == true) {
        shieldJ2 = true;
        parweaponJ2 = rondache;
        parJ2 = parseInt(parweaponJ2[1]);
    } else if (BouclierJ2.checked == true) {
        shieldJ2 = true;
        parweaponJ2 = bouclier;
        parJ2 = parseInt(parweaponJ2[1]);
    } else {
        shieldJ2 = false;
        parJ2 = parseInt(weaponJ2[1]);
    }

    dmgJ2 = parseInt(weaponJ2[0]);
}