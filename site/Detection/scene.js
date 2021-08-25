 // Scene Camera & Renderer
 const renderer = new THREE.WebGLRenderer({
	antialias: true,
	preserveDrawingBuffer: true,
	alpha: true
});
document.body.appendChild(renderer.domElement);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setClearColor(0x000000, 0);

scene = new THREE.Scene();
scene.position.y -= 3.6;
scene.position.x -= 2;

camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.5, 1000);
camera.position.set(6, 2.5, 12);
scene.add(camera);

const control = new THREE.TransformControls(camera, renderer.domElement);
control.space = "local";
control.position.y += 3.6;
control.position.x += 2;

control.addEventListener('dragging-changed', function(event) {
	controls.enabled = !event.value;
});

const control2 = new THREE.TransformControls(camera, renderer.domElement);
control2.space = "local";
control2.position.y += 3.6;
control2.position.x += 2;
control2.showX = false;
control2.showY = false;
control2.showZ = false;
control2.enabled = false;

control2.addEventListener('dragging-changed', function(event) {
	controls.enabled = !event.value;
});

const control3 = new THREE.TransformControls(camera, renderer.domElement);
control3.space = "local";
control3.position.y += 3.6;
control3.position.x += 2;
control3.showX = false;
control3.showY = false;
control3.showZ = false;
control3.enabled = false;

control3.addEventListener('dragging-changed', function(event) {
	controls.enabled = !event.value;
});

const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

const rgbl = new THREE.RGBELoader();
rgbl.setDataType(THREE.UnsignedByteType)
rgbl.setPath('./assets/textures/')
rgbl.load('greenwich_park_02_4k.hdr', function(texture) {

	const envMap = pmremGenerator.fromEquirectangular(texture).texture;
	scene.environment = envMap;
	//scene.background = envMap;
})

// Clips

const localPlane = new THREE.Plane(new THREE.Vector3(0, 5, 0), 0.72);
const localPlaneZ = new THREE.Plane(new THREE.Vector3(0, 0, 5), 0.6);

Empty = Object.freeze([]);
renderer.clippingPlanes = Empty; // GUI sets it to globalPlanes
renderer.localClippingEnabled = true;

// Materials	

const basic_material = new THREE.MeshStandardMaterial({
	color: 0x808080
});
const glass_material = new THREE.MeshPhysicalMaterial({
	color: 0xffffff,
	metalness: 0,
	roughness: 0.3,
	transmission: 0.9,
	transparent: true,
	clippingPlanes: [localPlane, localPlaneZ],
	clipShadows: true
});
const barrel_material = new THREE.MeshPhysicalMaterial({
	clippingPlanes: [localPlane, localPlaneZ],
	clipShadows: true
});
const coffre_material = new THREE.MeshPhysicalMaterial();
const mur_material = new THREE.MeshPhysicalMaterial({
	color: 0xaca89f
});
const tarp_material = new THREE.MeshPhysicalMaterial({
	clippingPlanes: [localPlane, localPlaneZ],
	clipShadows: true
});
const wood_material = new THREE.MeshPhysicalMaterial({
	color: 0xd9ccae,
	clippingPlanes: [localPlane, localPlaneZ],
	clipShadows: true
});
const wood2_material = new THREE.MeshPhysicalMaterial({
	color: 0xd9ccae,
	clippingPlanes: [localPlane, localPlaneZ],
	clipShadows: true
});
const steel_material = new THREE.MeshPhysicalMaterial({
	color: 0xaca89f,
	clippingPlanes: [localPlane, localPlaneZ],
	clipShadows: true
});
const table_material = new THREE.MeshPhysicalMaterial({
	clippingPlanes: [localPlane, localPlaneZ],
	clipShadows: true
});
const cushions_material = new THREE.MeshPhysicalMaterial({
	clippingPlanes: [localPlane, localPlaneZ],
	clipShadows: true
});
const loader = new THREE.OBJLoader();

const params = {
	color: '#ffffff',
	scale: 1,
	flowX: 0.75,
	flowY: 0.75
};

// objects

shadowMesh = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshPhysicalMaterial({
		color: 0xaca89f,
		envMapIntensity: 0.75,
		clippingPlanes: [localPlane, localPlaneZ],
		clipShadows: true
	})
);
shadowMesh.position.y = 0.5;
shadowMesh.castShadow = true;
shadowMesh.receiveShadow = true;
scene.add(shadowMesh);
shadowMesh.visible = true;

control.attach(shadowMesh);
scene.add(control);
control.enabled = true;
control.showX = true;
control.showY = true;
control.showZ = true;

//window.addEventListener( 'resize', resizeRendererToDisplaySize );

window.addEventListener('keydown', function(event) {

	switch (event.keyCode) {

		case 87: // W
			control.setMode("translate");
			break;

		case 69: // E
			control.setMode("rotate");
			break;

		case 82: // R
			control.setMode("scale");
			break;

		case 16: // Shift
			control.setTranslationSnap(1);
			control.setRotationSnap(THREE.MathUtils.degToRad(15));
			control.setScaleSnap(0.25);
			break;
	}
});

window.addEventListener('keyup', function(event) {

	switch (event.keyCode) {

		case 16: // Shift
			control.setTranslationSnap(null);
			control.setRotationSnap(null);
			control.setScaleSnap(null);
			break;

	}

});

let floorGeometry = new THREE.PlaneGeometry(20, 20);
let floorMaterial = new THREE.ShadowMaterial();
floorMaterial.opacity = 0.55;
let floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
floorMesh.rotation.x = -Math.PI / 2;
floorMesh.receiveShadow = true;
scene.add(floorMesh);

loader.load(
	'./assets/obj/barrel.obj',
	function(object) {

		object.traverse(function(child) {
			child.castShadow = true;
		});
		object.traverse(function(child) {
			child.receiveShadow = true;
		});

		barrelTexture = new THREE.TextureLoader().load('./assets/textures/barrelD.jpg');
		barrelNorm = new THREE.TextureLoader().load('./assets/textures/barrelN.jpg');
		barrelSpec = new THREE.TextureLoader().load('./assets/textures/barrelS.jpg');
		object.traverse(function(child) {
			if (child instanceof THREE.Mesh) {
				child.material = barrel_material;

				child.material.map = barrelTexture;
				child.material.normalMap = barrelNorm;
				child.material.roughnessMap = barrelSpec;

				child.material.roughness = 2;
				child.material.normalScale = new THREE.Vector2(3, 3);
				child.material.envMapIntensity = 0.75;
			}
		});

		barrel = object;
		scene.add(barrel);
		barrel.visible = false;
	});

loader.load(
	'./assets/obj/coffre.obj',
	function(object) {

		object.traverse(function(child) {
			child.castShadow = true;
		});
		object.traverse(function(child) {
			child.receiveShadow = true;
		});
		object.scale.x = 1.5;
		object.scale.y = 1.5;
		object.scale.z = 1.5;

		object.position.y -= 0.3;

		coffreTexture = new THREE.TextureLoader().load('./assets/textures/coffreD.jpg');
		coffreNorm = new THREE.TextureLoader().load('./assets/textures/coffreB.jpg');
		coffreSpec = new THREE.TextureLoader().load('./assets/textures/coffreS.jpg');
		object.traverse(function(child) {
			if (child instanceof THREE.Mesh) {
				child.material = coffre_material;

				child.material.map = coffreTexture;
				child.material.bumpMap = coffreNorm;
				child.material.roughnessMap = coffreSpec;

				child.material.roughness = 2;
				child.material.bumpScale = 0.05;
			}
		});

		coffre = object;
		scene.add(coffre);
		coffre.visible = false;
	});

loader.load(
	'./assets/obj/plane.obj',
	function(object) {

		object.traverse(function(child) {
			child.castShadow = true;
		});
		object.traverse(function(child) {
			child.receiveShadow = true;
		});
		object.scale.x = 1.5;
		object.scale.y = 1.5;
		object.scale.z = 1.5;

		murNorm = new THREE.TextureLoader().load('./assets/textures/murN2.jpg');
		murNorm.wrapS = murNorm.wrapT = THREE.RepeatWrapping;
		murNorm.repeat.set(1, 1);

		object.traverse(function(child) {
			if (child instanceof THREE.Mesh) {
				child.material = mur_material;

				child.material.normalMap = murNorm;
				child.material.normalScale = new THREE.Vector2(0.5, 0.5);


			}
		});

		plane = object;
		scene.add(plane);
		plane.visible = false;
	});

loader.load(
	'./assets/obj/garden1.obj',
	function(object) {

		object.traverse(function(child) {
			child.castShadow = true;
		});
		object.traverse(function(child) {
			child.receiveShadow = true;
		});
		object.scale.x = 1.5;
		object.scale.y = 1.5;
		object.scale.z = 1.5;

		gardenTexture = new THREE.TextureLoader().load('./assets/textures/gardenD.jpg');
		gardenTexture.wrapS = gardenTexture.wrapT = THREE.RepeatWrapping;
		gardenTexture.repeat.set(8, 8);

		gardenNorm = new THREE.TextureLoader().load('./assets/textures/gardenN.jpg');
		gardenNorm.wrapS = gardenNorm.wrapT = THREE.RepeatWrapping;
		gardenNorm.repeat.set(8, 8);

		gardenSpec = new THREE.TextureLoader().load('./assets/textures/gardenS.jpg');
		gardenSpec.wrapS = gardenSpec.wrapT = THREE.RepeatWrapping;
		gardenSpec.repeat.set(8, 8);

		object.traverse(function(child) {
			if (child instanceof THREE.Mesh) {
				child.material = table_material;

				child.material.map = gardenTexture;
				child.material.normalMap = gardenNorm;
				child.material.roughnessMap = gardenSpec;
				child.material.envMapIntensity = 1.5;

				child.material.normalScale = new THREE.Vector2(0.5, 0.5);
			}
		});

		table = object;
		table.visible = false;

		const salon = new THREE.Group();
		salon.add(table);
		salon.add(cushions);
		salon.add(plateau);
		scene.add(salon);
		salon.position.z = 4;

		control2.attach(salon);
		scene.add(control2);

		//window.addEventListener( 'resize', resizeRendererToDisplaySize );

		window.addEventListener('keydown', function(event) {

			switch (event.keyCode) {

				case 87: // W
					control2.setMode("translate");
					break;

				case 69: // E
					control2.setMode("rotate");
					break;

				case 82: // R
					control2.setMode("scale");
					break;

				case 16: // Shift
					control2.setTranslationSnap(1);
					control2.setRotationSnap(THREE.MathUtils.degToRad(15));
					control2.setScaleSnap(0.25);
					break;
			}
		});

		window.addEventListener('keyup', function(event) {

			switch (event.keyCode) {

				case 16: // Shift
					control2.setTranslationSnap(null);
					control2.setRotationSnap(null);
					control2.setScaleSnap(null);
					break;

			}

		});
	});

loader.load(
	'./assets/obj/garden2.obj',
	function(object) {

		object.traverse(function(child) {
			child.castShadow = true;
		});
		object.traverse(function(child) {
			child.receiveShadow = true;
		});
		object.scale.x = 1.5;
		object.scale.y = 1.5;
		object.scale.z = 1.5;

		cushionsTexture = new THREE.TextureLoader().load('./assets/textures/gardenD2.jpg');
		cushionsTexture.wrapS = cushionsTexture.wrapT = THREE.RepeatWrapping;
		cushionsTexture.repeat.set(5, 5);

		cushionsNorm = new THREE.TextureLoader().load('./assets/textures/gardenN2.jpg');
		cushionsNorm.wrapS = cushionsNorm.wrapT = THREE.RepeatWrapping;
		cushionsNorm.repeat.set(5, 5);

		cushionsSpec = new THREE.TextureLoader().load('./assets/textures/gardenS2.jpg');
		cushionsSpec.wrapS = cushionsSpec.wrapT = THREE.RepeatWrapping;
		cushionsSpec.repeat.set(5, 5);

		object.traverse(function(child) {
			if (child instanceof THREE.Mesh) {
				child.material = cushions_material;

				child.material.map = cushionsTexture;
				child.material.normalMap = cushionsNorm;
				child.material.roughnessMap = cushionsSpec;
				child.material.envMapIntensity = 2.5;
			}
		});

		cushions = object;
		cushions.visible = false;

	});

loader.load(
	'./assets/obj/garden3.obj',
	function(object) {

		object.traverse(function(child) {
			child.castShadow = true;
		});
		object.traverse(function(child) {
			child.receiveShadow = true;
		});
		object.scale.x = 1.5;
		object.scale.y = 1.5;
		object.scale.z = 1.5;

		glassSpec = new THREE.TextureLoader().load('./assets/textures/glassS.jpg');
		glassSpec.wrapS = glassSpec.wrapT = THREE.RepeatWrapping;
		glassSpec.repeat.set(10, 10);

		object.traverse(function(child) {
			if (child instanceof THREE.Mesh) {
				child.material = glass_material;
				child.material.roughnessMap = glassSpec;

				child.material.envMapIntensity = 0.1;
			}
		});

		plateau = object;
		plateau.visible = false;

	});

const waterGeometry = new THREE.CircleGeometry(2.6, 8);

water = new THREE.Water(waterGeometry, {
	color: params.color,
	scale: params.scale,
	flowDirection: new THREE.Vector2(params.flowX, params.flowY),
	textureWidth: 1024,
	textureHeight: 1024
});

water.position.y = 1;
water.rotation.z = 0.392699;
water.position.y = 1.1;
water.rotation.x = Math.PI * -0.5;

const cyl_fog = new THREE.CylinderGeometry(0.5, 0.5, 0.85, 8);
const material2 = new THREE.RawShaderMaterial({
	glslVersion: THREE.GLSL3,
	uniforms: {
		base: {
			value: new THREE.Color(0x6699cc)
		},
		map: {
			value: texture
		},
		cameraPos: {
			value: new THREE.Vector3()
		},
		threshold: {
			value: 0.05
		},
		opacity: {
			value: 0.005
		},
		range: {
			value: 0.1
		},
		steps: {
			value: 200
		},
		frame: {
			value: 0
		}
	},
	vertexShader,
	fragmentShader,
	side: THREE.FrontSide,
	transparent: true,
});

cloud = new THREE.Mesh(cyl_fog, material2);
cloud.position.y += 0.58;
cloud.rotation.y = 0.392699;
cloud.scale.set(5, 1.2, 5);
//scene.add( cloud );

loader.load(
	'./assets/obj/tarp2.obj',
	function(object) {

		object.traverse(function(child) {
			child.castShadow = true;
		});
		object.traverse(function(child) {
			child.receiveShadow = true;
		});

		tarpTexture = new THREE.TextureLoader().load('./assets/textures/tarpD.jpg');
		tarpTexture.wrapS = tarpTexture.wrapT = THREE.RepeatWrapping;
		tarpTexture.repeat.set(2, 2);

		tarpNorm = new THREE.TextureLoader().load('./assets/textures/tarpN.jpg');
		tarpNorm.wrapS = tarpNorm.wrapT = THREE.RepeatWrapping;
		tarpNorm.repeat.set(2, 2);

		tarpSpec = new THREE.TextureLoader().load('./assets/textures/tarpS.jpg');
		tarpSpec.wrapS = tarpSpec.wrapT = THREE.RepeatWrapping;
		tarpSpec.repeat.set(2, 2);

		object.traverse(function(child) {
			if (child instanceof THREE.Mesh) {

				child.material = tarp_material;
				child.material.map = tarpTexture;
				child.material.roughnessMap = tarpSpec;
				child.material.normalMap = tarpNorm;
				child.material.envMapIntensity = 0.25;
				child.material.side = THREE.DoubleSide;

				child.material.roughness = 0.95;
				child.material.reflectivity = 0.1;
				child.material.ior = 1.5;
			}
		});

		tarp = object;
		tarp.visible = false;
	});

loader.load(
	'./assets/obj/pool.obj',
	function(object) {

		object.traverse(function(child) {
			child.castShadow = true;
		});
		object.traverse(function(child) {
			child.receiveShadow = true;
		});

		poolTexture = new THREE.TextureLoader().load('./assets/textures/poolD.jpg');
		poolTexture.wrapS = poolTexture.wrapT = THREE.RepeatWrapping;
		poolTexture.repeat.set(5, 5);

		poolNorm = new THREE.TextureLoader().load('./assets/textures/poolN.jpg');
		poolNorm.wrapS = poolNorm.wrapT = THREE.RepeatWrapping;
		poolNorm.repeat.set(5, 5);

		poolSpec = new THREE.TextureLoader().load('./assets/textures/poolS.jpg');
		poolSpec.wrapS = poolSpec.wrapT = THREE.RepeatWrapping;
		poolSpec.repeat.set(5, 5);

		object.traverse(function(child) {
			if (child instanceof THREE.Mesh) {

				child.material = wood_material;
				child.material.map = poolTexture;
				child.material.roughnessMap = poolSpec;
				child.material.normalMap = poolNorm;
				child.material.envMapIntensity = 0.25;
				child.material.side = THREE.DoubleSide;
				child.material.roughness = 0.8;
			}
		});

		pool = object;
		pool.visible = false;
	});

loader.load(
	'./assets/obj/ladder.obj',
	function(object) {

		object.traverse(function(child) {
			child.castShadow = true;
		});
		object.traverse(function(child) {
			child.receiveShadow = true;
		});

		ladderTexture = new THREE.TextureLoader().load('./assets/textures/ladderD.jpg');
		ladderTexture.wrapS = ladderTexture.wrapT = THREE.RepeatWrapping;
		ladderTexture.repeat.set(40, 40);

		ladderNorm = new THREE.TextureLoader().load('./assets/textures/ladderN.jpg');
		ladderNorm.wrapS = ladderNorm.wrapT = THREE.RepeatWrapping;
		ladderNorm.repeat.set(40, 40);

		ladderSpec = new THREE.TextureLoader().load('./assets/textures/ladderS.jpg');
		ladderSpec.wrapS = ladderSpec.wrapT = THREE.RepeatWrapping;
		ladderSpec.repeat.set(40, 40);

		ladderMet = new THREE.TextureLoader().load('./assets/textures/ladderM.jpg');
		ladderMet.wrapS = ladderMet.wrapT = THREE.RepeatWrapping;
		ladderMet.repeat.set(40, 40);

		object.traverse(function(child) {
			if (child instanceof THREE.Mesh) {

				child.material = steel_material;
				child.material.map = ladderTexture;
				child.material.roughnessMap = ladderSpec;
				child.material.metalnessMap = ladderMet;
				child.material.normalMap = ladderNorm;
				child.material.envMapIntensity = 0.25;

				child.material.roughness = 0.75;
				child.material.metalness = 0.95;
				child.material.reflectivity = 7.95;
				child.material.normalScale = new THREE.Vector2(0.25, 0.25);
			}
		});

		ladder = object;
		ladder.visible = false;

		const Pool = new THREE.Group();
		pool.add(water);
		pool.add(tarp);
		Pool.add(pool);
		pool.add(ladder);
		pool.add(ladder2);
		pool.add(cloud);
		scene.add(Pool);
		pool.position.z = 4;
		control3.attach(Pool);
		scene.add(control3);

		//window.addEventListener( 'resize', resizeRendererToDisplaySize );

		window.addEventListener('keydown', function(event) {

			switch (event.keyCode) {

				case 87: // W
					control3.setMode("translate");
					break;

				case 69: // E
					control3.setMode("rotate");
					break;

				case 82: // R
					control3.setMode("scale");
					break;

				case 16: // Shift
					control3.setTranslationSnap(1);
					control3.setRotationSnap(THREE.MathUtils.degToRad(15));
					control3.setScaleSnap(0.25);
					break;
			}
		});

		window.addEventListener('keyup', function(event) {

			switch (event.keyCode) {

				case 16: // Shift
					control3.setTranslationSnap(null);
					control3.setRotationSnap(null);
					control3.setScaleSnap(null);
					break;

			}

		});
	});

loader.load(
	'./assets/obj/ladder2.obj',
	function(object) {

		object.traverse(function(child) {
			child.castShadow = true;
		});
		object.traverse(function(child) {
			child.receiveShadow = true;
		});

		pool2Texture = new THREE.TextureLoader().load('./assets/textures/poolD.jpg');
		pool2Texture.wrapS = pool2Texture.wrapT = THREE.RepeatWrapping;
		pool2Texture.repeat.set(2, 2);

		pool2Norm = new THREE.TextureLoader().load('./assets/textures/poolN.jpg');
		pool2Norm.wrapS = pool2Norm.wrapT = THREE.RepeatWrapping;
		pool2Norm.repeat.set(2, 2);

		pool2Spec = new THREE.TextureLoader().load('./assets/textures/poolS.jpg');
		pool2Spec.wrapS = pool2Spec.wrapT = THREE.RepeatWrapping;
		pool2Spec.repeat.set(2, 2);

		object.traverse(function(child) {
			if (child instanceof THREE.Mesh) {

				child.material = wood2_material;
				child.material.map = pool2Texture;
				child.material.roughnessMap = pool2Spec;
				child.material.normalMap = pool2Norm;
				child.material.envMapIntensity = 0.25;
				child.material.side = THREE.DoubleSide;

				child.material.roughness = 0.8;
			}
		});

		ladder2 = object;
		ladder2.visible = false;
	});


// Lights

const light = new THREE.SpotLight(0xffffff, 1.5);
light.position.set(200, 300, -200);
light.castShadow = true;
light.decay = 2;

light.shadow.mapSize = new THREE.Vector2(4096, 4096);
light.shadow.camera.near = 15;
light.shadow.focus = 0.165;
light.shadow.radius = 1;
light.shadow.bias = 0.000001;
light.shadow.normalBias = 0.02;

scene.add(light);

// Grid

let gridHelper = new THREE.GridHelper(5, 10, 0xf29131, 0xA9A9A9);
scene.add(gridHelper);
gridHelper.position.y -= 0.03;
gridHelper.visible = true;

const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);
axesHelper.visible = false;

// Controls		

const controls = new THREE.OrbitControls(camera, renderer.domElement);

controls.maxPolarAngle = Math.PI / 1.9;
controls.minPolarAngle = Math.PI / 5;
controls.enableDamping = true;
controls.enablePan = true;
controls.enableZoom = true;
controls.dampingFactor = 0.1;
controls.panSpeed = 0.5;
controls.rotateSpeed = 0.5;

// Animation & render

function animate() {

	renderer.render(scene, camera);
	renderer.setPixelRatio(window.devicePixelRatio);

	requestAnimationFrame(animate);

	cloud.material.uniforms.cameraPos.value.copy(camera.position);
	cloud.material.uniforms.frame.value++;

	//controls.update();

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