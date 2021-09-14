function stuff1() {

    let handsJ1;
    let headJ1;
    let torsoJ1;
    let legsJ1;

    gants = 3;
    mains = 0;

    cerveliere = 5;
    camail = 6;
    capuchon = 2;
    chapel = 7;
    casque = 15;
    tete = 0;

    chemise = 9;
    gambison = 6;
    broigne = 12;
    haubergeon = 11;
    plastron = 11;    
    veste = 5;
    harnois = 15;  
    lin = 1;

    jambieres_cuir = 4;
    jambieres_maille = 9;

    if (GantsJ1.checked == true) {
        handsJ1 = gants;
    } else {
        handsJ1 = mains;
    }

    if (CervelièreJ1.checked == true) {
        headJ1 = cerveliere;
    } else if (CamailJ1.checked == true) {
        headJ1 = camail;
    } else if (CapuchonJ1.checked == true) {
        headJ1 = capuchon;
    } else if (ChapelJ1.checked == true) {
        headJ1 = chapel;
    } else if (CasqueJ1.checked == true) {
        headJ1 = casque;
    } else {
        headJ1 = tete;
    }

    if (ChemiseJ1.checked == true) {
        torsoJ1 = chemise;
    } else if (GambisonJ1.checked == true) {
        torsoJ1 = gambison;
    } else if (BroigneJ1.checked == true) {
        torsoJ1 = broigne;
    } else if (HaubergeonJ1.checked == true) {
        torsoJ1 = haubergeon;
    } else if (PlastronJ1.checked == true) {
        torsoJ1 = plastron;
    } else if (VesteJ1.checked == true) {
        torsoJ1 = veste;
    } else if (HarnoisJ1.checked == true) {
        torsoJ1 = harnois;
    } else {
        torsoJ1 = lin;
    }

    if (Jambière_cJ1.checked == true) {
        legsJ1 = jambieres_cuir;
    } else if (Jambières_mJ1.checked == true) {
        legsJ1 = jambieres_maille;
    } else {
        legsJ1 = lin;
    }
}