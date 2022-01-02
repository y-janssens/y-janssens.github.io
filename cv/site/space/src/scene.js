// Scene Camera & Renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    preserveDrawingBuffer: true,
    alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.5;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

document.body.appendChild(renderer.domElement);

scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 10000);
camera.position.set(-24, 0, -14);

// Lights

//scene.add( new THREE.AmbientLight( 0xffffff, 0.1 ) );

const light = new THREE.PointLight(0xffffff, 2.5, 2000, 0);

light.castShadow = true;

light.shadow.mapSize = new THREE.Vector2(8192, 8192);
light.shadow.camera.near = 15;
light.shadow.camera.far = 2000;
light.shadow.radius = 5;


scene.add(light);
light.position.set(-25, 0, -25);

const sphereSize = 1;
const pointLightHelper = new THREE.PointLightHelper( light, sphereSize );
scene.add( pointLightHelper );

// Objects

// Sun

const geometry5 = new THREE.SphereGeometry(10, 50, 50);
const material5 = new THREE.MeshStandardMaterial({
    transparent: true,
    map: new THREE.TextureLoader().load('./assets/textures/sunD.jpg'),
    normalMap: new THREE.TextureLoader().load('./assets/textures/sunN.jpg'),
    normalScale: new THREE.Vector2(3, 3),
    emissive: 0xffffff,
    emissiveMap: new THREE.TextureLoader().load('./assets/textures/sunE.jpg'),
    emissiveIntensity: 5

});

sun = new THREE.Mesh(geometry5, material5);

/*sun.castShadow = false;
sun.receiveShadow = false;*/
sun.visible = true;

sun.position.set(-1000, 0, -1000);

scene.add( sun );
//sun.add(light);

// Sun Halo

const geometry6 = new THREE.SphereGeometry(10, 50, 50);
const material6 = new THREE.MeshLambertMaterial({
    color: 0x00ff6c,
    transparent: true,
    opacity: 0
});
mesh1 = new THREE.Mesh(geometry6, material6);
mesh1.position.set(-1000, 0, -1000);
scene.add(mesh1);
mesh1.visible = true;

const spriteMaterial2 = new THREE.SpriteMaterial({
    map: new THREE.ImageUtils.loadTexture('./assets/textures/glow.png'),
    alphaMap: new THREE.TextureLoader().load('./assets/textures/glow.png'),
    color: 0xe4d18e,
    transparent: true,
    blending: THREE.AdditiveBlending
});
const sprite2 = new THREE.Sprite(spriteMaterial2);
sprite2.scale.set(3.25, 3.25, 1.0);
mesh1.add(sprite2);

// Earth

const geometry1 = new THREE.SphereGeometry(1, 50, 50);
const material1 = new THREE.MeshPhysicalMaterial({
    color: 0x5a5a5a,
    fog: false,
    map: new THREE.TextureLoader().load('./assets/textures/earthD.jpg'),
    roughnessMap: new THREE.TextureLoader().load('./assets/textures/earthR.jpg'),
    //normalMap: new THREE.TextureLoader().load( './assets/textures/earthN.jpg' ),
    //normalScale: new THREE.Vector2(0.25, 0.25),
    emissive: 0xffffff,
    emissiveMap: new THREE.TextureLoader().load('./assets/textures/earthE.jpg'),
    emissiveIntensity: 0.25,
    roughness: 1,
    reflectivity: 0.7
});
const earth = new THREE.Mesh(geometry1, material1);

earth.castShadow = true;
earth.receiveShadow = true;
earth.visible = true;

scene.add (earth);

// Halo

const geometry = new THREE.SphereGeometry(1, 50, 50);
const material = new THREE.MeshLambertMaterial({
    color: 0x000088,
    transparent: true,
    opacity: 0
});
mesh = new THREE.Mesh(geometry, material);
scene.add (mesh);
mesh.visible = true;

const spriteMaterial = new THREE.SpriteMaterial({
    map: new THREE.ImageUtils.loadTexture('./assets/textures/glow.png'),
    alphaMap: new THREE.TextureLoader().load('./assets/textures/glow.png'),
    color: 0xb4ecff,
    transparent: true,
    blending: THREE.AdditiveBlending
});
const sprite = new THREE.Sprite(spriteMaterial);
sprite.scale.set(3.15, 3.15, 1.0);
mesh.add(sprite);

// Clouds

const geometry2 = new THREE.SphereGeometry(1.01, 50, 50);
const material2 = new THREE.MeshPhysicalMaterial({
    map: new THREE.TextureLoader().load('./assets/textures/clouds2 copie.png'),
    transparent: true,
    opacity: 0.75
});

const clouds = new THREE.Mesh(geometry2, material2);

clouds.castShadow = true;
clouds.receiveShadow = true;
clouds.visible = true;

scene.add (clouds);

// Moon

const geometry4 = new THREE.SphereGeometry(0.05, 50, 50);
const material4 = new THREE.MeshStandardMaterial({
    color: 0x5e5e5e,
    map: new THREE.TextureLoader().load('./assets/textures/moonD.jpg')
});

moon = new THREE.Mesh(geometry4, material4);
moon.position.y += 2.5;

moon.castShadow = true;
moon.receiveShadow = true;
moon.visible = true;

pivot = new THREE.Group();
//pivot.position.set( 1000.0, 0.0, 1000 );
pivot.add( moon );

scene.add (pivot);

// Sky

const texture = new THREE.TextureLoader().load('./assets/textures/background.jpg');
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 10, 10 );

const geometry3 = new THREE.SphereGeometry(1750, 50, 50);
const material3 = new THREE.MeshLambertMaterial({
    side: THREE.BackSide,
    map: texture,
});

sky = new THREE.Mesh(geometry3, material3);
scene.add(sky);

// Controls		

const controls = new THREE.OrbitControls(camera, renderer.domElement);

controls.maxPolarAngle = Math.PI / 1.825;
controls.minPolarAngle = Math.PI / 2.2;
controls.maxDistance = 25;
controls.minDistance = 5;
controls.zoomSpeed = 0.5;
controls.rotateSpeed = 0.5;

// Animation & render

function animate() {

    renderer.render(scene, camera);

    renderer.setPixelRatio(window.devicePixelRatio);

    requestAnimationFrame(animate);

    const time = performance.now() * 0.001;

    earth.rotation.y += 0.0005;
    clouds.rotation.y += 0.00035;

    sky.rotation.z += 0.00001;
    sky.rotation.y += 0.00001;
    sky.rotation.z += 0.00001;

    pivot.rotation.z += 0.0001;
    pivot.rotation.x += 0.000001;

    material5.emissiveIntensity = Math.sin( time ) *1.5 + 5;

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