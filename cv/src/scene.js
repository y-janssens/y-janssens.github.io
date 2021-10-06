// Scene Camera & Renderer

const renderer = new THREE.WebGLRenderer({
    antialias: false,
    preserveDrawingBuffer: true,
    alpha: true
});
renderer.setSize( innerWidth, innerHeight );
document.body.appendChild(renderer.domElement);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

scene = new THREE.Scene();
scene.background = new THREE.Color(0xc2bfb8);
scene.fog = new THREE.Fog(0xc2bfb8, 10, 70);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 10);

let loader = new THREE.OBJLoader()
let domEvents = new THREEx.DomEvents(camera, renderer.domElement);

// Sounds

const listener = new THREE.AudioListener();
const sound1 = new THREE.Audio(listener);
const audioLoader1 = new THREE.AudioLoader();
audioLoader1.load('./src/assets/ambiant.mp3', function (buffer) {
    sound1.setBuffer(buffer);
    sound1.setLoop(true);
    sound1.setVolume(0.025);
    //sound1.play();
});

// Objects

const floorGeo = new THREE.PlaneGeometry(1000, 1000, 1000, 1000);
const floorMat = new THREE.MeshStandardMaterial({ color: 0xc2bfb8 });
floor = new THREE.Mesh(floorGeo, floorMat);
floor.rotation.x -= 1.57;
floor.castShadow = true;
floor.receiveShadow = true;
scene.add(floor);

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
controls.enableZoom = false;
controls.target.set(0, -3, -25);

// Animation & render

function animate() {

    renderer.render(scene, camera);
    renderer.setPixelRatio(window.devicePixelRatio);

    requestAnimationFrame(animate);

    const time = performance.now() * 0.001;

    mesh1.position.y = Math.sin(time) * 0.25 + 2.5;
    mesh2.position.y = Math.sin(time) * 0.25 + 2.5;
    mesh3.position.y = Math.sin(time) * 0.25 + 2.5;
    mesh4.position.y = Math.sin(time) * 0.25 + 2.5;
    mesh5.position.y = Math.sin(time) * 0.25 + 2.5;
    mesh6.position.y = Math.sin(time) * 0.25 + 2.5;
    mesh7.position.y = Math.sin(time) * 0.25 + 2.5;
    mesh9.position.y = Math.sin(time) * 0.25 + 2.5;
    mesh10.position.y = Math.sin(time) * 0.25 + 2.5;
    mesh11.position.y = Math.sin(time) * 0.25 + 2.5;
    mesh12.position.y = Math.sin(time) * 0.25 + 2.5;
    mesh13.position.y = Math.sin(time) * 0.25 + 2.5;
    mesh14.position.y = Math.sin(time) * 0.25 + 2.5;

    const target1 = new THREE.Vector3();
    mesh1.getWorldPosition(target1);
    const distance1 = camera.position.distanceTo(target1);

    const target2 = new THREE.Vector3();
    mesh2.getWorldPosition(target2);
    const distance2 = camera.position.distanceTo(target2);

    const target3 = new THREE.Vector3();
    mesh3.getWorldPosition(target3);
    const distance3 = camera.position.distanceTo(target3);

    const target4 = new THREE.Vector3();
    mesh4.getWorldPosition(target4);
    const distance4 = camera.position.distanceTo(target4);

    const target5 = new THREE.Vector3();
    mesh5.getWorldPosition(target5);
    const distance5 = camera.position.distanceTo(target5);

    const target6 = new THREE.Vector3();
    mesh6.getWorldPosition(target6);
    const distance6 = camera.position.distanceTo(target6);

    const target7 = new THREE.Vector3();
    mesh7.getWorldPosition(target7);
    const distance7 = camera.position.distanceTo(target7);

    const target9 = new THREE.Vector3();
    mesh9.getWorldPosition(target9);
    const distance9 = camera.position.distanceTo(target9);

    const target10 = new THREE.Vector3();
    mesh10.getWorldPosition(target10);
    const distance10 = camera.position.distanceTo(target10);

    const target11 = new THREE.Vector3();
    mesh11.getWorldPosition(target11);
    const distance11 = camera.position.distanceTo(target11);

    const target12 = new THREE.Vector3();
    mesh12.getWorldPosition(target12);
    const distance12 = camera.position.distanceTo(target12);

    const target13 = new THREE.Vector3();
    mesh13.getWorldPosition(target13);
    const distance13 = camera.position.distanceTo(target13);

    const target14 = new THREE.Vector3();
    mesh14.getWorldPosition(target14);
    const distance14 = camera.position.distanceTo(target14);

    if (distance1 < 10) {
        img1_focus = true;
        mesh1.position.lerp(cube1.position, 0.015);
        gsap.to(rectLight1, 3, { intensity: 3 })
        gsap.to(mesh1mat, 10, { opacity: 0.75 })
        mesh1mat.color = new THREE.Color();
    } else {
        img1_focus = false;
        mesh1.position.lerp(cube2.position, 0.015);
        gsap.to(rectLight1, 1, { intensity: 1 })
        gsap.to(mesh1mat, 1, { opacity: 0.25 })
        mesh1mat.color = new THREE.Color(0xc2bfb8);
    }

    if (distance2 <= 10) {
        img2_focus = true;
        mesh2.position.lerp(cube3.position, 0.015);
        gsap.to(rectLight2, 3, { intensity: 3 })
        gsap.to(mesh2mat, 3, { opacity: 0.75 })
        mesh2mat.color = new THREE.Color();
    } else if (distance2 > 1) {
        img2_focus = false;
        mesh2.position.lerp(cube4.position, 0.015);
        gsap.to(rectLight2, 1, { intensity: 1 })
        gsap.to(mesh2mat, 1, { opacity: 0.25 })
        mesh2mat.color = new THREE.Color(0x108080);
    }

    if (distance3 <= 10) {
        img3_focus = true;
        mesh3.position.lerp(cube5.position, 0.015);
        gsap.to(rectLight3, 3, { intensity: 3 })
        gsap.to(mesh3mat, 3, { opacity: 0.5 })
        mesh3mat.color = new THREE.Color();
    } else if (distance3 > 8) {
        img3_focus = false;
        mesh3.position.lerp(cube6.position, 0.015);
        gsap.to(rectLight3, 1, { intensity: 1 })
        gsap.to(mesh3mat, 1, { opacity: 0.15 })
        mesh3mat.color = new THREE.Color(0xa81d00);
    }

    if (distance4 <= 10) {
        img4_focus = true;
        mesh4.position.lerp(cube7.position, 0.015);
        gsap.to(rectLight4, 3, { intensity: 3 })
        gsap.to(mesh4mat, 3, { opacity: 0.5 })
    } else if (distance4 > 8) {
        img4_focus = false;
        mesh4.position.lerp(cube8.position, 0.015);
        gsap.to(rectLight4, 1, { intensity: 1 })
        gsap.to(mesh4mat, 1, { opacity: 0.15 })
    }

    if (distance5 <= 10) {
        img5_focus = true;
        mesh5.position.lerp(cube9.position, 0.015);
        gsap.to(rectLight5, 3, { intensity: 3 })
        gsap.to(mesh5mat, 3, { opacity: 0.5 })
    } else if (distance5 > 8) {
        img5_focus = false;
        mesh5.position.lerp(cube10.position, 0.015);
        gsap.to(rectLight5, 1, { intensity: 1 })
        gsap.to(mesh5mat, 1, { opacity: 0.15 })
    }

    if (distance6 <= 10) {
        img6_focus = true;
        mesh6.position.lerp(cube11.position, 0.015);
        gsap.to(rectLight6, 3, { intensity: 3 })
        gsap.to(mesh6mat, 3, { opacity: 0.5 })
    } else if (distance6 > 8) {
        img6_focus = false;
        mesh6.position.lerp(cube12.position, 0.015);
        gsap.to(rectLight6, 1, { intensity: 1 })
        gsap.to(mesh6mat, 1, { opacity: 0.15 })
    }

    if (distance7 <= 10) {
        img7_focus = true;
        mesh7.position.lerp(cube13.position, 0.015);
        gsap.to(rectLight7, 3, { intensity: 3 })
        gsap.to(mesh7mat, 3, { opacity: 0.5 })
    } else if (distance7 > 8) {
        img7_focus = false;
        mesh7.position.lerp(cube14.position, 0.015);
        gsap.to(rectLight7, 1, { intensity: 1 })
        gsap.to(mesh7mat, 1, { opacity: 0.15 })
    }

    if (distance9 <= 10) {
        img9_focus = true;
        mesh9.position.lerp(cube17.position, 0.015);
        gsap.to(rectLight9, 3, { intensity: 3 })
        gsap.to(mesh9mat, 3, { opacity: 0.5 })
    } else if (distance9 > 8) {
        img9_focus = false;
        mesh9.position.lerp(cube18.position, 0.015);
        gsap.to(rectLight9, 1, { intensity: 1 })
        gsap.to(mesh9mat, 1, { opacity: 0.15 })
    }

    if (distance10 <= 10) {
        img10_focus = true;
        mesh10.position.lerp(cube19.position, 0.015);
        gsap.to(rectLight10, 3, { intensity: 3 })
        gsap.to(mesh10mat, 3, { opacity: 0.5 })
    } else if (distance10 > 8) {
        img10_focus = false;
        mesh10.position.lerp(cube20.position, 0.015);
        gsap.to(rectLight10, 1, { intensity: 1 })
        gsap.to(mesh10mat, 1, { opacity: 0.15 })
    }

    if (distance11 <= 10) {
        img11_focus = true;
        mesh11.position.lerp(cube21.position, 0.015);
        gsap.to(rectLight11, 3, { intensity: 3 })
        gsap.to(mesh11mat, 3, { opacity: 0.5 })
    } else if (distance11 > 8) {
        img11_focus = false;
        mesh11.position.lerp(cube22.position, 0.015);
        gsap.to(rectLight11, 1, { intensity: 1 })
        gsap.to(mesh11mat, 1, { opacity: 0.15 })
    }

    if (distance12 <= 10) {
        img12_focus = true;
        mesh12.position.lerp(cube23.position, 0.015);
        gsap.to(rectLight12, 3, { intensity: 3 })
        gsap.to(mesh12mat, 3, { opacity: 0.5 })
    } else if (distance12 > 8) {
        img12_focus = false;
        mesh12.position.lerp(cube24.position, 0.015);
        gsap.to(rectLight12, 1, { intensity: 1 })
        gsap.to(mesh12mat, 1, { opacity: 0.15 })
    }

    if (distance13 <= 10) {
        img13_focus = true;
        mesh13.position.lerp(cube25.position, 0.015);
        gsap.to(rectLight13, 3, { intensity: 3 })
        gsap.to(mesh13mat, 3, { opacity: 0.5 })
    } else if (distance13 > 8) {
        img13_focus = false;
        mesh13.position.lerp(cube26.position, 0.015);
        gsap.to(rectLight13, 1, { intensity: 1 })
        gsap.to(mesh13mat, 1, { opacity: 0.15 })
    }

    if (distance14 <= 10) {
        img14_focus = true;
        mesh14.position.lerp(cube27.position, 0.015);
        gsap.to(rectLight14, 3, { intensity: 3 })
        gsap.to(mesh14mat, 3, { opacity: 0.5 })
    } else if (distance14 > 8) {
        img14_focus = false;
        mesh14.position.lerp(cube28.position, 0.015);
        gsap.to(rectLight14, 1, { intensity: 1 })
        gsap.to(mesh14mat, 1, { opacity: 0.15 })
    }

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