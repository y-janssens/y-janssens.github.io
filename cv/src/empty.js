// Scene Camera & Renderer

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    preserveDrawingBuffer: true,
    alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

scene = new THREE.Scene();
scene.background = new THREE.Color(0xc2bfb8);
scene.fog = new THREE.Fog(0xc2bfb8, 10, 70);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//camera.position.set( 0, 30, 10 ); 
camera.position.set(0, 2, 10);

let domEvents = new THREEx.DomEvents(camera, renderer.domElement);
loader = new THREE.OBJLoader();


// Sounds

const listener = new THREE.AudioListener();
const sound1 = new THREE.Audio(listener);
const audioLoader1 = new THREE.AudioLoader();
audioLoader1.load('./src/assets/ambiant.mp3', function (buffer) {
    sound1.setBuffer(buffer);
    sound1.setLoop(true);
    sound1.setVolume(0.1);
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

loader.load(
    './src/assets/card_uvs.obj', function (object) {

        object.traverse(function (child) { child.castShadow = true; });
        object.traverse(function (child) { child.receiveShadow = true; });

        mesh1Texture = new THREE.TextureLoader().load('./src/assets/textures/mini1_diffuse.png');
        mesh1Texture.wrapS = mesh1Texture.wrapT = THREE.RepeatWrapping;

        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = objmat1;
                child.material.color = new THREE.Color(0xc2bfb8);
                child.material.map = mesh1Texture;
                child.material.emissive = new THREE.Color(0xc2bfb8);
                child.material.emissiveMap = mesh1Texture;
                child.material.emissiveIntensity = 1;
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

        domEvents.addEventListener(mesh1, 'click', function (event) {

            $('#container').css('visibility', 'visible');
            $('#item1').css('visibility', 'visible');
            $('#container').css('pointer-events', 'initial');

            $('#container').on('touchstart click', function () {
                $('#container').css('visibility', 'hidden');
                $('#item1').css('visibility', 'hidden');
                $('#container').css('pointer-events', 'none');
            });

        }, false);
    });

// Controls		

const controls = new THREE.OrbitControls(camera, renderer.domElement);

/* controls.maxPolarAngle = Math.PI / 2.25;
controls.minPolarAngle = Math.PI / 2.25;
controls.enableRotate = true;
controls.rotateSpeed = 0.15;
controls.autoRotate = false;
controls.enableDamping = false;
controls.enablePan = false;
controls.enableZoom = false; */
controls.target.set(0, -3, -25);

// Animation & render

function animate() {

    renderer.render(scene, camera);

    renderer.setPixelRatio(window.devicePixelRatio);

    requestAnimationFrame(animate);

    const time = performance.now() * 0.001;
    const time2 = performance.now() * 0.002;

    mesh1.position.y = Math.sin(time) * 0.25 + 2.5;

/*     const target1 = new THREE.Vector3();
    mesh1.getWorldPosition(target1);
    const distance1 = camera.position.distanceTo(target1);

     if (distance1 <= 10) {
        mesh1.position.lerp(cube1.position, 0.015);
        gsap.to(rectLight1, 3, { intensity: 3 })
        gsap.to(material1, 3, { opacity: 0.75 })
        material1.color = new THREE.Color();
    } else if (distance1 > 8) {
        mesh1.position.lerp(cube2.position, 0.015);
        gsap.to(rectLight1, 1, { intensity: 1 })
        gsap.to(material1, 1, { opacity: 0.15 })
        material1.color = new THREE.Color(0x78080);
    }  */

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