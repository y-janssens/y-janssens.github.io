// Scene Camera & Renderer

const renderer = new THREE.WebGLRenderer({ antialias: false, preserveDrawingBuffer: true });
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.LinearToneMapping;
renderer.toneMappingExposure = 0.9;

scene = new THREE.Scene();
scene.background = new THREE.Color(0x609fc3);
scene.fog = new THREE.Fog(0x609fc3, 1, 250);

camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 20000);
camera.position.z = 40;

const objects = [];

let raycaster;
let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;

let prevTime = performance.now();
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();
const vertex = new THREE.Vector3();
const color = new THREE.Color();

// Materials	

const basic_material = new THREE.MeshStandardMaterial({ color: 0x808080 });
const ground_material = new THREE.MeshPhysicalMaterial();
const soil_material = new THREE.MeshPhysicalMaterial();

const loader = new THREE.OBJLoader();

const params = {
    color: '#ffffff',
    scale: 10,
    flowX: 0.75,
    flowY: 0.75
};

const waterGeometry = new THREE.PlaneGeometry(2000, 2000, 32);

water = new THREE.Water(waterGeometry, {
    color: params.color,
    scale: params.scale,
    flowDirection: new THREE.Vector2(params.flowX, params.flowY),
    textureWidth: 1024,
    textureHeight: 1024
});

water.rotation.z = 0.392699;
water.position.y -= 47;
water.rotation.x = Math.PI * - 0.5;

//scene.add (water);

loader.load('./assets/obj/map.obj', function (object) {

    object.traverse(function (child) { child.castShadow = true; });
    object.traverse(function (child) { child.receiveShadow = true; });

    object.position.y -= 50;

    soilTexture = new THREE.TextureLoader().load('./assets/textures/grassD.png')
    soilTexture.wrapS = soilTexture.wrapT = THREE.RepeatWrapping;
    soilTexture.repeat.set(500, 500);

    object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = soil_material;
            child.material.map = soilTexture;
            child.material.envMapIntensity = 0.01;
            child.material.side = THREE.DoubleSide;
        }
    });

    map = object;
    //scene.add( map );		
    map.visible = true;
});

loader.load('./assets/obj/city_map.obj', function (object) {

    object.traverse(function (child) { child.castShadow = true; });
    object.traverse(function (child) { child.receiveShadow = true; });

    object.position.y -= 51.275;

    terrTexture = new THREE.TextureLoader().load('./assets/textures/terrasseD.jpg');
    terrTexture.wrapS = terrTexture.wrapT = THREE.RepeatWrapping;
    terrTexture.repeat.set(500, 500);

    terrSpec = new THREE.TextureLoader().load('./assets/textures/terrasseS.jpg');
    terrSpec.wrapS = terrSpec.wrapT = THREE.RepeatWrapping;
    terrSpec.repeat.set(500, 500);

    terrNorm = new THREE.TextureLoader().load('./assets/textures/terrasseN.jpg');
    terrNorm.wrapS = terrNorm.wrapT = THREE.RepeatWrapping;
    terrNorm.repeat.set(500, 500);

    object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            child.material = ground_material;
            //child.material.side = THREE.DoubleSide;        

            child.material.map = terrTexture;
            child.material.roughnessMap = terrSpec;
            child.material.normalMap = terrNorm;
            child.material.envMapIntensity = 0.01;
            child.material.roughness = 0.55;

            child.material.normalScale = new THREE.Vector2(1, 1);
        }
    });

    cityMap = object;
    scene.add(cityMap);
    cityMap.visible = true;
});

// Controls		

const controls = new THREE.PointerLockControls(camera, document.body);

const blocker = document.getElementById('blocker');
const instructions = document.getElementById('instructions');

instructions.addEventListener('click', function () {

    controls.lock();

});

controls.addEventListener('lock', function () {

    instructions.style.display = 'none';
    blocker.style.display = 'none';

});

controls.addEventListener('unlock', function () {

    blocker.style.display = 'block';
    instructions.style.display = '';

});


scene.add(controls.getObject());

const onKeyDown = function (event) {

    switch (event.code) {

        case 'ArrowUp':
        case 'KeyW':
            moveForward = true;
            break;

        case 'ArrowLeft':
        case 'KeyA':
            moveLeft = true;
            break;

        case 'ArrowDown':
        case 'KeyS':
            moveBackward = true;
            break;

        case 'ArrowRight':
        case 'KeyD':
            moveRight = true;
            break;

        case 'Space':
            if (canJump === true) velocity.y += 350;
            canJump = false;
            break;

    }

};

const onKeyUp = function (event) {

    switch (event.code) {

        case 'ArrowUp':
        case 'KeyW':
            moveForward = false;
            break;

        case 'ArrowLeft':
        case 'KeyA':
            moveLeft = false;
            break;

        case 'ArrowDown':
        case 'KeyS':
            moveBackward = false;
            break;

        case 'ArrowRight':
        case 'KeyD':
            moveRight = false;
            break;

    }

};

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

raycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3(0, - 1, 0), 0, 10);

// PostProcessing

const width = window.innerWidth;
const height = window.innerHeight;

const composer = new THREE.EffectComposer(renderer);
composer.setSize(window.innerWidth, window.innerHeight);

const renderPass = new THREE.RenderPass(scene, camera);
composer.addPass(renderPass);

// BLOOM		

const paramsB = {
    exposure: 1,
    bloomStrength: 0.1,
    bloomThreshold: 0.99,
    bloomRadius: 0
};

const bloomPass = new THREE.UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
bloomPass.threshold = paramsB.bloomThreshold;
bloomPass.strength = paramsB.bloomStrength;
bloomPass.radius = paramsB.bloomRadius;

composer.addPass(bloomPass);

// Animation & render

function animate() {

    requestAnimationFrame(animate);

    const time = performance.now();

    raycaster.ray.origin.copy(controls.getObject().position);
    raycaster.ray.origin.y -= 10;

    const intersections = raycaster.intersectObjects(objects);

    const onObject = intersections.length > 0;

    const delta = (time - prevTime) / 1000;
    const delta2 = (time - prevTime) / 25000;

    velocity.x -= velocity.x * 10.0 * delta;
    velocity.z -= velocity.z * 10.0 * delta;

    velocity.y -= 400 * 100.0 * delta2; // 100.0 = mass

    direction.z = Number(moveForward) - Number(moveBackward);
    direction.x = Number(moveRight) - Number(moveLeft);
    direction.normalize(); // this ensures consistent movements in all directions

    if (moveForward || moveBackward) velocity.z -= direction.z * 100.0 * delta;
    if (moveLeft || moveRight) velocity.x -= direction.x * 100.0 * delta;

    if (onObject === true) {

        velocity.y = Math.max(1000, velocity.y);
        canJump = true;

    }

    controls.moveRight(- velocity.x * delta);
    controls.moveForward(- velocity.z * delta);

    controls.getObject().position.y += (velocity.y * delta2); // new behavior


    if (controls.getObject().position.y < 1.75) {

        velocity.y = 0;
        controls.getObject().position.y = 1.75;

        canJump = true;
    }

    prevTime = time;

    renderer.render(scene, camera); // PostProcessing OFF
    //composer.render(scene, camera); // PostProcessing ON  

    renderer.setPixelRatio(window.devicePixelRatio);
    //composer.setPixelRatio(window.devicePixelRatio);


    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }

    const target = cube2.position;
    const distance = camera.position.distanceTo(target);

    if (distance < 10) {
        herse.position.lerp(cube.position, 0.015);

    } else if (distance > 10) {
        if (herse.position.y > 5) {
            herse.position.lerp(cube3.position, 0.015);
        }
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
