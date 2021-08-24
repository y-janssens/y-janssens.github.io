// Lights

const hemilight = new THREE.HemisphereLight(0xc2bfb8, 0x808080, 1);
scene.add(hemilight);

const light = new THREE.PointLight(0xffffff, 0.15, 100, 3);
light.position.set(0, 30, -25);
light.castShadow = true;

light.shadow.mapSize = new THREE.Vector2(4096, 4096);
light.shadow.radius = 2;
scene.add(light);

const rectLight1 = new THREE.RectAreaLight(0xC28542, 1, 4, 2.5);
rectLight1.lookAt(0, 0, 1);

const rectLight2 = new THREE.RectAreaLight(0x078180, 1, 4, 2.5);
rectLight2.lookAt(0, 0, 1);

const rectLight3 = new THREE.RectAreaLight(0xd02400, 1, 4, 2.5);
rectLight3.lookAt(0, 0, 1);

const rectLight4 = new THREE.RectAreaLight(0xFFFFFF, 1, 4, 2.5);
rectLight4.lookAt(0, 0, 1);

const rectLight5 = new THREE.RectAreaLight(0xFFFFFF, 1, 4, 2.5);
rectLight5.lookAt(0, 0, 1);

const rectLight6 = new THREE.RectAreaLight(0xFFFFFF, 1, 4, 2.5);
rectLight6.lookAt(0, 0, 1);

const rectLight7 = new THREE.RectAreaLight(0xFFFFFF, 1, 4, 2.5);
rectLight7.lookAt(0, 0, 1);

const rectLight8 = new THREE.RectAreaLight(0xFFFFFF, 1, 4, 2.5);
rectLight8.lookAt(0, 0, 1);

const rectLight9 = new THREE.RectAreaLight(0xBAA78F, 1, 4, 2.5);
rectLight9.lookAt(0, 0, 1);

const rectLight10 = new THREE.RectAreaLight(0xFFFFFF, 1, 4, 2.5);
rectLight10.lookAt(0, 0, 1);

const rectLight11 = new THREE.RectAreaLight(0xFFFFFF, 1, 4, 2.5);
rectLight11.lookAt(0, 0, 1);

const rectLight12 = new THREE.RectAreaLight(0xFFFFFF, 1, 4, 2.5);
rectLight12.lookAt(0, 0, 1);

const rectLight13 = new THREE.RectAreaLight(0xFFFFFF, 1, 4, 2.5);
rectLight13.lookAt(0, 0, 1);

const rectLight14 = new THREE.RectAreaLight(0xFFFFFF, 1, 4, 2.5);
rectLight14.lookAt(0, 0, 1);

const rectLight15 = new THREE.RectAreaLight(0xFFFFFF, 1, 4, 2.5);
rectLight15.lookAt(0, 0, 1);