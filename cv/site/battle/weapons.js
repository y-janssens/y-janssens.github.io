function weapons() {
    let d4 = Math.floor(Math.random() * 4) + 1; 
    let d6 = Math.floor(Math.random() * 6) + 1; 
    let d8 = Math.floor(Math.random() * 8) + 1; 
    let d10 = Math.floor(Math.random() * 10) + 1; 

    let shieldJ1 = false;

    let epee = [(14 + d8), 8];
    let epeelongue = [(16 + d8), 12];
    let dague  = [(12 + d6), 6];
    let gantelet  = [(6 + d6), 2];
    let marteau = [(10 + d8), 4];
    let pioche = [(10 + d6), 6];
    let fleau = [(16 + d6), 5];
    let gourdin = [(10 + d8), 4];
    let hache = [(14 + d6), 8];
    let masse = [(14 + d6), 8];
    let faux = [(10 + d6), 8];
    let marteauguerre = [(18 + d8), 6];
    let bec = [(18 + d10), 10];
    let hachedeux = [(22 + d10), 10];
    let estramacon = [(20 + d10), 10];
    let vouge = [(14 + d6), 8];
    let hallebarde = [(18 + d8), 8];
    let pique = [(18 + d8), 10];
    let lance = [(22 + d10), 2];
    let rondache = [(4 + d6), 14];
    let bouclier = [(6 + d6), 16];
    let poings = [(4 + d4), 1];

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
    }  else {
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

 /*    if (shieldJ1 == true) {
        parJ1 = parseInt(parweaponJ1[1]);
    } else {
        parJ1 = parseInt(weaponJ1[1]);
    } */

    dmgJ1 = parseInt(weaponJ1[0]);
    parJ1 = parseInt(weaponJ1[1]);

    console.log('Att: ' + dmgJ1);
    console.log('Par: ' + parJ1);

/*     if (epeeJ2.checked == true) {
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
    } else if (rondacheJ2.checked == true) {
        weaponJ2 = rondache;
    } else if (BouclierJ2.checked == true) {
        weaponJ2 = bouclier;
    } else {
        weaponJ2 = poings;
    }
 */


/*     dmg2 = parseInt(weaponJ2[0]);    
    par2 = parseInt(weaponJ2[1]); */
}

weapons();

