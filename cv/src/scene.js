// Scene Camera & Renderer

let cardnumber = 24;
let cardspace = cardnumber / 2;
let number = Math.PI / cardspace;

const renderer = new THREE.WebGLRenderer({
  antialias: false,
  preserveDrawingBuffer: true,
  alpha: true,
});
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

scene = new THREE.Scene();
scene.background = new THREE.Color(0xc2bfb8);
scene.fog = new THREE.Fog(0xc2bfb8, 10, 70);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 2, 10);

let loader = new THREE.OBJLoader();
let domEvents = new THREEx.DomEvents(camera, renderer.domElement);

// Objects

const floorGeo = new THREE.PlaneGeometry(1000, 1000, 1000, 1000);
const floorMat = new THREE.MeshStandardMaterial({ color: 0xc2bfb8 });
floor = new THREE.Mesh(floorGeo, floorMat);
floor.rotation.x -= 1.57;
floor.castShadow = true;
floor.receiveShadow = true;
scene.add(floor);

const geometryC = new THREE.BoxGeometry(0.25, 0.25, 0.25);
const materialC = new THREE.MeshBasicMaterial();

const cube1 = new THREE.Mesh(geometryC, materialC);
cube1.position.set(0, 2.5, 29.5);
cube1.visible = false;

const group01 = new THREE.Group();
group01.position.z -= 25;
group01.add(cube1);
scene.add(group01);

const cube2 = new THREE.Mesh(geometryC, materialC);
cube2.position.set(0, 2.5, 25);
cube2.visible = false;

const group02 = new THREE.Group();
group02.position.z -= 25;
group02.add(cube2);
scene.add(group02);

const card1 = new Card(1, 0, 0xc2bfb8, 0xc28542, 1).create();
const card2 = new Card(2, 1, 0x108080, 0x078180, 2).create();
const card3 = new Card(3, 2, 0xa81d00, 0xd02400, 3).create();
const card4 = new Card(4, 3, 0x808080, 0xffffff, 4).create();
const card5 = new Card(9, 4, 0x808080, 0x51abd0, 5).create();
const card6 = new Card(10, 5, 0x808080, 0xfffbb2, 6).create();
const card7 = new Card(11, 6, 0x808080, 0xe5bc29, 7).create();
const card8 = new Card(5, -1, 0x808080, 0xbaa78f, 8).create();
const card9 = new Card(6, -2, 0x808080, 0x63ff09, 9).create();
const card10 = new Card(8, -3, 0x808080, 0xbad7e9, 10).create();
const card11 = new Card(7, -4, 0x808080, 0xfefecc, 11).create();
const card12 = new Card(13, -5, 0x808080, 0x77bd6e, 12).create();
const card13 = new Card(14, -6, 0x808080, 0x7d6290, 13).create();

// Lights

const hemilight = new THREE.HemisphereLight(0xc2bfb8, 0x808080, 1);
hemilight.castShadow = false;
scene.add(hemilight);

const light = new THREE.PointLight(0xffffff, 0.15, 100, 3);
light.position.set(0, 30, -25);
light.castShadow = false;

scene.add(light);

// Controls

const controls = new THREE.OrbitControls(camera, renderer.domElement);

let min = Math.PI / 0.67;
let max = Math.PI * 0.51;

controls.minPolarAngle = Math.PI / 2.25;
controls.maxPolarAngle = Math.PI / 2.25;
controls.minAzimuthAngle = min;
controls.maxAzimuthAngle = max;
controls.enableRotate = true;
controls.rotateSpeed = 0.15;
controls.autoRotate = false;
controls.enableDamping = false;
controls.enablePan = false;
controls.enableZoom = true;
controls.target.set(0, -3, -25);

// Animation & render

function animate() {
  renderer.render(scene, camera);
  renderer.setPixelRatio(window.devicePixelRatio);

  requestAnimationFrame(animate);

  controls.update();

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }
}

animate();

function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  var width = window.innerWidth;
  var height = window.innerHeight;
  var canvasPixelWidth = canvas.width / window.devicePixelRatio;
  var canvasPixelHeight = canvas.height / window.devicePixelRatio;

  const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
  if (needResize) {
    renderer.setSize(width, height, true);
  }
  return needResize;
}
