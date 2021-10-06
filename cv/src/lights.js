// Lights

const hemilight = new THREE.HemisphereLight(0xc2bfb8, 0x808080, 1);
hemilight.castShadow = false;
scene.add(hemilight);

const light = new THREE.PointLight(0xffffff, 0.15, 100, 3);
light.position.set(0, 30, -25);
light.castShadow = false;

//light.shadow.mapSize = new THREE.Vector2(1024, 1024);
//light.shadow.radius = 2;
scene.add(light);

const rectLight1 = new THREE.RectAreaLight(0xC28542, 1, 4, 2.5);
rectLight1.lookAt(0, 0, 1);
rectLight1.castShadow = false;

const rectLight2 = new THREE.RectAreaLight(0x078180, 1, 4, 2.5);
rectLight2.lookAt(0, 0, 1);
rectLight2.castShadow = false;

const rectLight3 = new THREE.RectAreaLight(0xd02400, 1, 4, 2.5);
rectLight3.lookAt(0, 0, 1);
rectLight3.castShadow = false;

const rectLight4 = new THREE.RectAreaLight(0xFFFFFF, 1, 4, 2.5);
rectLight4.lookAt(0, 0, 1);
rectLight4.castShadow = false;

const rectLight5 = new THREE.RectAreaLight(0x51abd0, 1, 4, 2.5);
rectLight5.lookAt(0, 0, 1);
rectLight5.castShadow = false;

const rectLight6 = new THREE.RectAreaLight(0xfffbb2, 1, 4, 2.5);
rectLight6.lookAt(0, 0, 1);
rectLight6.castShadow = false;

const rectLight7 = new THREE.RectAreaLight(0xe5bc29, 1, 4, 2.5);
rectLight7.lookAt(0, 0, 1);
rectLight7.castShadow = false;

const rectLight9 = new THREE.RectAreaLight(0xBAA78F, 1, 4, 2.5);
rectLight9.lookAt(0, 0, 1);
rectLight9.castShadow = false;

const rectLight10 = new THREE.RectAreaLight(0x63FF09, 1, 4, 2.5);
rectLight10.lookAt(0, 0, 1);
rectLight10.castShadow = false;

const rectLight11 = new THREE.RectAreaLight(0xBAD7E9, 1, 4, 2.5);
rectLight11.lookAt(0, 0, 1);
rectLight11.castShadow = false;

const rectLight12 = new THREE.RectAreaLight(0xfefecc, 1, 4, 2.5);
rectLight12.lookAt(0, 0, 1);
rectLight12.castShadow = false;

const rectLight13 = new THREE.RectAreaLight(0x77bd6e, 1, 4, 2.5);
rectLight13.lookAt(0, 0, 1);
rectLight13.castShadow = false;

const rectLight14 = new THREE.RectAreaLight(0x7d6290, 1, 4, 2.5);
rectLight14.lookAt(0, 0, 1);
rectLight14.castShadow = false;