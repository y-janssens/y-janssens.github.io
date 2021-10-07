
let cardnumber = 24;
let cardspace = cardnumber / 2;
let number = Math.PI / cardspace;
window.onload = touch();
var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

if (supportsTouch) {
    clics = 'touchstart';
} else if (supportsTouch === undefined) {
    clics = 'click';
}

function touch() {
    let check = 'ontouchstart' in window || navigator.msMaxTouchPoints;
    if (check) {
        $('.close').trigger("click");
    }
}

loader.load(
    './src/assets/card_uvs_low.obj', function (object) {

        object.traverse(function (child) { child.castShadow = true; });
        object.traverse(function (child) { child.receiveShadow = true; });

        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = mesh1mat;
                child.material.color = new THREE.Color(0xc2bfb8);
                child.material.map = mesh1Texture;
                child.material.emissive = new THREE.Color(0xc2bfb8);
                child.material.emissiveMap = mesh1Texture;
            }
        });

        mesh1 = object;
        mesh1.scale.set(0.28, 0.25, 1);
        mesh1.position.y += 2.5;
        mesh1.position.z += 25;
        mesh1.rotation.x -= 0.1;

        mesh1.add(rectLight1);

        group1 = new THREE.Group();
        group1.position.z -= 25;
        group1.add(mesh1);
        scene.add(group1);

        domEvents.addEventListener(mesh1, clics, function (event) {            
            if (img1_focus == true) {
                shrink1();
            } else {
                return false;
            }
        }, false);
    });

loader.load(
    './src/assets/card_uvs_low.obj', function (object) {

        object.traverse(function (child) { child.castShadow = true; });
        object.traverse(function (child) { child.receiveShadow = true; });

        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = mesh2mat
                child.material.color = new THREE.Color(0x108080);
                child.material.map = mesh2Texture;
                child.material.emissive = new THREE.Color(0x108080);
                child.material.emissiveMap = mesh2Texture;
            }
        });

        mesh2 = object;
        mesh2.scale.set(0.28, 0.25, 1);
        mesh2.position.y += 2.5;
        mesh2.position.z += 25;
        mesh2.rotation.x -= 0.1;

        mesh2.add(rectLight2);

        group2 = new THREE.Group();
        group2.position.z -= 25;
        group2.rotation.y = number;
        group2.add(mesh2);
        scene.add(group2);

        domEvents.addEventListener(mesh2, clics, function (event) {

            if (img2_focus == true) {
                shrink2();
            } else {
                return false;
            }
        }, false);
    });

loader.load(
    './src/assets/card_uvs_low.obj', function (object) {

        object.traverse(function (child) { child.castShadow = true; });
        object.traverse(function (child) { child.receiveShadow = true; });

        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = mesh3mat
                child.material.color = new THREE.Color(0xa81d00);
                child.material.map = mesh3Texture;
                child.material.emissive = new THREE.Color(0xa81d00);
                child.material.emissiveMap = mesh3Texture;
            }
        });

        mesh3 = object;
        mesh3.scale.set(0.28, 0.25, 1);
        mesh3.position.y += 2.5;
        mesh3.position.z += 25;
        mesh3.rotation.x -= 0.1;

        mesh3.add(rectLight3);

        group3 = new THREE.Group();
        group3.position.z -= 25;
        group3.rotation.y = number * 2;
        group3.add(mesh3);
        scene.add(group3);

        domEvents.addEventListener(mesh3, clics, function (event) {

            if (img3_focus == true) {
                shrink3();
            } else {
                return false;
            }
        }, false);
    });

loader.load(
    './src/assets/card_uvs_low.obj', function (object) {

        object.traverse(function (child) { child.castShadow = true; });
        object.traverse(function (child) { child.receiveShadow = true; });

        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = mesh4mat
                child.material.color = new THREE.Color(0x808080);
                child.material.map = mesh4Texture
                child.material.emissive = new THREE.Color(0x808080);
                child.material.emissiveMap = mesh4Texture
            }
        });

        mesh4 = object;
        mesh4.scale.set(0.28, 0.25, 1);
        mesh4.position.y += 2.5;
        mesh4.position.z += 25;
        mesh4.rotation.x -= 0.1;

        mesh4.add(rectLight4);

        group4 = new THREE.Group();
        group4.position.z -= 25;
        group4.rotation.y = number * 3;
        group4.add(mesh4);
        scene.add(group4);

        domEvents.addEventListener(mesh4, clics, function (event) {

            if (img4_focus == true) {
                shrink4();
            } else {
                return false;
            }
        }, false);
    });

loader.load(
    './src/assets/card_uvs_low.obj', function (object) {

        object.traverse(function (child) { child.castShadow = true; });
        object.traverse(function (child) { child.receiveShadow = true; });

        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = mesh5mat
                child.material.color = new THREE.Color(0x808080);
                child.material.map = mesh5Texture
                child.material.emissive = new THREE.Color(0x808080);
                child.material.emissiveMap = mesh5Texture
            }
        });

        mesh5 = object;
        mesh5.scale.set(0.28, 0.25, 1);
        mesh5.position.y += 2.5;
        mesh5.position.z += 25;
        mesh5.rotation.x -= 0.1;

        mesh5.add(rectLight5);

        group5 = new THREE.Group();
        group5.position.z -= 25;
        group5.rotation.y = number * 4;
        group5.add(mesh5);
        scene.add(group5);

        domEvents.addEventListener(mesh5, clics, function (event) {

            if (img5_focus == true) {
                shrink5();
            } else {
                return false;
            }
        }, false);
    });

loader.load(
    './src/assets/card_uvs_low.obj', function (object) {

        object.traverse(function (child) { child.castShadow = true; });
        object.traverse(function (child) { child.receiveShadow = true; });

        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = mesh6mat
                child.material.color = new THREE.Color(0x808080);
                child.material.map = mesh6Texture
                child.material.emissive = new THREE.Color(0x808080);
                child.material.emissiveMap = mesh6Texture
            }
        });

        mesh6 = object;
        mesh6.scale.set(0.28, 0.25, 1);
        mesh6.position.y += 2.5;
        mesh6.position.z += 25;
        mesh6.rotation.x -= 0.1;

        mesh6.add(rectLight6);

        group6 = new THREE.Group();
        group6.position.z -= 25;
        group6.rotation.y = number * 5;
        group6.add(mesh6);
        scene.add(group6);

        domEvents.addEventListener(mesh6, clics, function (event) {

            if (img6_focus == true) {
                shrink6();
            } else {
                return false;
            }
        }, false);
    });

loader.load(
    './src/assets/card_uvs_low.obj', function (object) {

        object.traverse(function (child) { child.castShadow = true; });
        object.traverse(function (child) { child.receiveShadow = true; });

        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = mesh7mat
                child.material.color = new THREE.Color(0x808080);
                child.material.map = mesh7Texture
                child.material.emissive = new THREE.Color(0x808080);
                child.material.emissiveMap = mesh7Texture
            }
        });

        mesh7 = object;
        mesh7.scale.set(0.28, 0.25, 1);
        mesh7.position.y += 2.5;
        mesh7.position.z += 25;
        mesh7.rotation.x -= 0.1;

        mesh7.add(rectLight7);

        group7 = new THREE.Group();
        group7.position.z -= 25;
        group7.rotation.y = number * 6;
        group7.add(mesh7);
        scene.add(group7);

        domEvents.addEventListener(mesh7, clics, function (event) {

            if (img7_focus == true) {
                shrink7();
            } else {
                return false;
            }
        }, false);
    });

loader.load(
    './src/assets/card_uvs_low.obj', function (object) {

        object.traverse(function (child) { child.castShadow = true; });
        object.traverse(function (child) { child.receiveShadow = true; });

        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = mesh9mat
                child.material.color = new THREE.Color(0x808080);
                child.material.map = mesh9Texture
                child.material.emissive = new THREE.Color(0x808080);
                child.material.emissiveMap = mesh9Texture
            }
        });

        mesh9 = object;
        mesh9.scale.set(0.28, 0.25, 1);
        mesh9.position.y += 2.5;
        mesh9.position.z += 25;
        mesh9.rotation.x -= 0.1;

        mesh9.add(rectLight9);

        group9 = new THREE.Group();
        group9.position.z -= 25;
        group9.rotation.y = - number;
        group9.add(mesh9);
        scene.add(group9);

        domEvents.addEventListener(mesh9, clics, function (event) {

            if (img9_focus == true) {
                shrink9();
            } else {
                return false;
            }
        }, false);
    });

loader.load(
    './src/assets/card_uvs_low.obj', function (object) {

        object.traverse(function (child) { child.castShadow = true; });
        object.traverse(function (child) { child.receiveShadow = true; });

        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = mesh10mat
                child.material.color = new THREE.Color(0x808080);
                child.material.map = mesh10Texture
                child.material.emissive = new THREE.Color(0x808080);
                child.material.emissiveMap = mesh10Texture
            }
        });

        mesh10 = object;
        mesh10.scale.set(0.28, 0.25, 1);
        mesh10.position.y += 2.5;
        mesh10.position.z += 25;
        mesh10.rotation.x -= 0.1;

        mesh10.add(rectLight10);

        group10 = new THREE.Group();
        group10.position.z -= 25;
        group10.rotation.y = - number * 2;
        group10.add(mesh10);
        scene.add(group10);

        domEvents.addEventListener(mesh10, clics, function (event) {

            if (img10_focus == true) {
                shrink10();
            } else {
                return false;
            }
        }, false);
    });

loader.load(
    './src/assets/card_uvs_low.obj', function (object) {

        object.traverse(function (child) { child.castShadow = true; });
        object.traverse(function (child) { child.receiveShadow = true; });

        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = mesh11mat
                child.material.color = new THREE.Color(0x808080);
                child.material.map = mesh11Texture
                child.material.emissive = new THREE.Color(0x808080);
                child.material.emissiveMap = mesh11Texture
            }
        });

        mesh11 = object;
        mesh11.scale.set(0.28, 0.25, 1);
        mesh11.position.y += 2.5;
        mesh11.position.z += 25;
        mesh11.rotation.x -= 0.1;

        mesh11.add(rectLight11);

        group11 = new THREE.Group();
        group11.position.z -= 25;
        group11.rotation.y = - number * 3;
        group11.add(mesh11);
        scene.add(group11);

        domEvents.addEventListener(mesh11, clics, function (event) {
            if (img11_focus == true) {
                shrink11();
            } else {
                return false;
            }
        }, false);
    });

loader.load(
    './src/assets/card_uvs_low.obj', function (object) {

        object.traverse(function (child) { child.castShadow = true; });
        object.traverse(function (child) { child.receiveShadow = true; });

        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = mesh12mat
                child.material.color = new THREE.Color(0x808080);
                child.material.map = mesh12Texture
                child.material.emissive = new THREE.Color(0x808080);
                child.material.emissiveMap = mesh12Texture
            }
        });

        mesh12 = object;
        mesh12.scale.set(0.28, 0.25, 1);
        mesh12.position.y += 2.5;
        mesh12.position.z += 25;
        mesh12.rotation.x -= 0.1;

        mesh12.add(rectLight12);

        group12 = new THREE.Group();
        group12.position.z -= 25;
        group12.rotation.y = - number * 4;
        group12.add(mesh12);
        scene.add(group12);

        domEvents.addEventListener(mesh12, clics, function (event) {

            if (img12_focus == true) {
                shrink12();
            } else {
                return false;
            }
        }, false);
    });

loader.load(
    './src/assets/card_uvs_low.obj', function (object) {

        object.traverse(function (child) { child.castShadow = true; });
        object.traverse(function (child) { child.receiveShadow = true; });

        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = mesh13mat
                child.material.color = new THREE.Color(0x808080);
                child.material.map = mesh13Texture
                child.material.emissive = new THREE.Color(0x808080);
                child.material.emissiveMap = mesh13Texture
            }
        });

        mesh13 = object;
        mesh13.scale.set(0.28, 0.25, 1);
        mesh13.position.y += 2.5;
        mesh13.position.z += 25;
        mesh13.rotation.x -= 0.1;

        mesh13.add(rectLight13);

        group13 = new THREE.Group();
        group13.position.z -= 25;
        group13.rotation.y = - number * 5;
        group13.add(mesh13);
        scene.add(group13);

        domEvents.addEventListener(mesh13, clics, function (event) {

            if (img13_focus == true) {
                shrink13();
            } else {
                return false;
            }
        }, false);
    });

loader.load(
    './src/assets/card_uvs_low.obj', function (object) {

        object.traverse(function (child) { child.castShadow = true; });
        object.traverse(function (child) { child.receiveShadow = true; });

        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = mesh14mat
                child.material.color = new THREE.Color(0x808080);
                child.material.map = mesh14Texture
                child.material.emissive = new THREE.Color(0x808080);
                child.material.emissiveMap = mesh14Texture
            }
        });

        mesh14 = object;
        mesh14.scale.set(0.28, 0.25, 1);
        mesh14.position.y += 2.5;
        mesh14.position.z += 25;
        mesh14.rotation.x -= 0.1;

        mesh14.add(rectLight14);

        group14 = new THREE.Group();
        group14.position.z -= 25;
        group14.rotation.y = - number * 6;
        group14.add(mesh14);
        scene.add(group14);

        domEvents.addEventListener(mesh14, clics, function (event) {

            if (img14_focus == true) {
                shrink14();
            } else {
                return false;
            }
        }, false);
    });