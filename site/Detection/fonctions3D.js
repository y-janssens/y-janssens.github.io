let objHidden = false;
var dir = new THREE.Vector3(0, 0, 0);
var dir2 = new THREE.Vector3(0, 0, 0);
var dir3 = new THREE.Vector3(1, 0, 0);
var speed = 1;

$('.button2').on('touchstart click', function() {
    if (objHidden) {
        objHidden = false;
        shadowMesh.visible = true;
        control.enabled = true;
        control.showX = true;
        control.showY = true;
        control.showZ = true;
        barrel.visible = false;
        coffre.visible = false;
        plane.visible = false;
        table.visible = false;
        cushions.visible = false;
        plateau.visible = false;
        water.visible = false;
        tarp.visible = false;
        pool.visible = false;
        ladder.visible = false;
        ladder2.visible = false;

    } else {
        objHidden = true;
        shadowMesh.visible = false;
        control.enabled = false;
        control.showX = false;
        control.showY = false;
        control.showZ = false;
        barrel.visible = false;
        coffre.visible = false;
        plane.visible = false;
        table.visible = false;
        cushions.visible = false;
        plateau.visible = false;
        water.visible = false;
        tarp.visible = false;
        pool.visible = false;
        ladder.visible = false;
        ladder2.visible = false;
    }
});

$('.button3').on('touchstart click', function() {
    if (objHidden) {
        objHidden = false;
        shadowMesh.visible = false;
        barrel.visible = true;
        coffre.visible = false;
        plane.visible = false;
        table.visible = false;
        cushions.visible = false;
        plateau.visible = false;
        control.enabled = false;
        control.showX = false;
        control.showY = false;
        control.showZ = false;
        water.visible = false;
        tarp.visible = false;
        pool.visible = false;
        ladder.visible = false;
        ladder2.visible = false;

    } else {
        objHidden = true;
        shadowMesh.visible = false;
        barrel.visible = false;
        coffre.visible = false;
        plane.visible = false;
        table.visible = false;
        cushions.visible = false;
        plateau.visible = false;
        control.enabled = false;
        control.showX = false;
        control.showY = false;
        control.showZ = false;
        water.visible = false;
        tarp.visible = false;
        pool.visible = false;
        ladder.visible = false;
        ladder2.visible = false;
    }
});

$('.button4').on('touchstart click', function() {
    if (objHidden) {
        objHidden = false;
        shadowMesh.visible = false;
        barrel.visible = false;
        coffre.visible = true;
        plane.visible = false;
        table.visible = false;
        cushions.visible = false;
        plateau.visible = false;
        control.enabled = false;
        control.showX = false;
        control.showY = false;
        control.showZ = false;
        water.visible = false;
        tarp.visible = false;
        pool.visible = false;
        ladder.visible = false;
        ladder2.visible = false;

    } else {
        objHidden = true;
        shadowMesh.visible = false;
        barrel.visible = false;
        coffre.visible = false;
        plane.visible = false;
        table.visible = false;
        cushions.visible = false;
        plateau.visible = false;
        control.enabled = false;
        control.showX = false;
        control.showY = false;
        control.showZ = false;
        water.visible = false;
        tarp.visible = false;
        pool.visible = false;
        ladder.visible = false;
        ladder2.visible = false;
    }
});

$('.button5').on('touchstart click', function() {
    if (objHidden) {
        objHidden = false;
        shadowMesh.visible = false;
        barrel.visible = false;
        coffre.visible = false;
        plane.visible = true;
        table.visible = false;
        cushions.visible = false;
        plateau.visible = false;
        control.enabled = false;
        control.showX = false;
        control.showY = false;
        control.showZ = false;
        water.visible = false;
        tarp.visible = false;
        pool.visible = false;
        ladder.visible = false;
        ladder2.visible = false;

    } else {
        objHidden = true;
        shadowMesh.visible = false;
        barrel.visible = false;
        coffre.visible = false;
        plane.visible = false;
        table.visible = false;
        cushions.visible = false;
        plateau.visible = false;
        control.enabled = false;
        control.showX = false;
        control.showY = false;
        control.showZ = false;
        water.visible = false;
        tarp.visible = false;
        pool.visible = false;
        ladder.visible = false;
        ladder2.visible = false;
    }
});

$('.button6').on('touchstart click', function() {
    if (objHidden) {
        objHidden = false;
        shadowMesh.visible = false;
        barrel.visible = false;
        coffre.visible = false;
        plane.visible = false;
        table.visible = true;
        cushions.visible = true;
        plateau.visible = true;
        control.enabled = false;
        control.showX = false;
        control.showY = false;
        control.showZ = false;
        control2.showX = true;
        control2.showY = true;
        control2.showZ = true;
        control2.enabled = true;
        water.visible = false;
        tarp.visible = false;
        pool.visible = false;
        ladder.visible = false;
        ladder2.visible = false;

    } else {
        objHidden = true;
        shadowMesh.visible = false;
        barrel.visible = false;
        coffre.visible = false;
        plane.visible = false;
        table.visible = false;
        cushions.visible = false;
        plateau.visible = false;
        control.enabled = false;
        control.showX = false;
        control.showY = false;
        control.showZ = false;
        control2.showX = false;
        control2.showY = false;
        control2.showZ = false;
        control2.enabled = false;
        water.visible = false;
        tarp.visible = false;
        pool.visible = false;
        ladder.visible = false;
        ladder2.visible = false;
    }
});

$('.button7').on('touchstart click', function() {
    if (objHidden) {
        objHidden = false;
        shadowMesh.visible = false;
        barrel.visible = false;
        coffre.visible = false;
        plane.visible = false;
        table.visible = false;
        cushions.visible = false;
        plateau.visible = false;
        control.enabled = false;
        control.showX = false;
        control.showY = false;
        control.showZ = false;
        control2.showX = false;
        control2.showY = false;
        control2.showZ = false;
        control2.enabled = false;
        control3.showX = true;
        control3.showY = true;
        control3.showZ = true;
        control3.enabled = true;
        water.visible = true;
        tarp.visible = true;
        pool.visible = true;
        ladder.visible = true;
        ladder2.visible = true;

    } else {
        objHidden = true;
        shadowMesh.visible = false;
        barrel.visible = false;
        coffre.visible = false;
        plane.visible = false;
        table.visible = false;
        cushions.visible = false;
        plateau.visible = false;
        control.enabled = false;
        control.showX = false;
        control.showY = false;
        control.showZ = false;
        control2.showX = false;
        control2.showY = false;
        control2.showZ = false;
        control2.enabled = false;
        control3.showX = false;
        control3.showY = false;
        control3.showZ = false;
        control3.enabled = false;
        water.visible = false;
        tarp.visible = false;
        pool.visible = false;
        ladder.visible = false;
        ladder2.visible = false;
    }
});

$('.button14').on('touchstart click', function() {
    mur_material.color = new THREE.Color(0xaca89f);
    mur_material.needsUpdate = true;
});

$('.button15').on('touchstart click', function() {
    mur_material.color = new THREE.Color(0xc1bdb3);
    mur_material.needsUpdate = true;
});

$('.button16').on('touchstart click', function() {
    mur_material.color = new THREE.Color(0xb4a596);
    mur_material.needsUpdate = true;
});

$('.button21').on('touchstart click', function() {

    if (objHidden) {
        objHidden = false;
        gridHelper.visible = true;
        axesHelper.visible = true;

    } else {
        objHidden = true;
        gridHelper.visible = false;
        axesHelper.visible = false;
    }
});

function reset() {
    controls.reset();
    controls.autoRotate = false;
}

function reload() {
    location.reload();
}

function cancel() {
    const animate3 = () => {
        window.cancelAnimationFrame(animate3);
    }
}

function rotateLeft() {
    camera.rotation.y += Math.PI / 64;
}

function rotateRight() {
    camera.rotation.y -= Math.PI / 64;
}

function moveForward() {
    camera.getWorldDirection(dir);
    camera.position.addScaledVector(dir, speed);
}

function moveBackward() {
    const camDir = camera.getWorldDirection(dir2);
    camDir.negate(dir2);
    camera.position.addScaledVector(dir2, speed);
}

function moveLeftward() {
    camera.position.x += (dir, speed);
}

function moveRightward() {
    camera.position.x -= (dir, speed);
}