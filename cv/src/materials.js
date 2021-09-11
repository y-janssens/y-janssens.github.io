let matcolor1 = new THREE.Color(0x808080);
let matcolor2 = new THREE.Color(0x108080);

const attributes = { color: matcolor1, side: THREE.DoubleSide, transparent: true, opacity: 0.15 };
const commonAttributes = { side: THREE.DoubleSide, transparent: true, opacity: 0.15, emissiveIntensity: 0.75 };

const globalmat = new THREE.MeshStandardMaterial(commonAttributes);
globalTexture = new THREE.TextureLoader().load('./src/assets/textures/mini.png');
globalTexture.wrapS = globalTexture.wrapT = THREE.RepeatWrapping;

const mesh1mat = new THREE.MeshStandardMaterial(commonAttributes);
mesh1Texture = new THREE.TextureLoader().load('./src/assets/textures/mini1.png');
mesh1Texture.wrapS = mesh1Texture.wrapT = THREE.RepeatWrapping;

const mesh2mat = new THREE.MeshStandardMaterial(commonAttributes);
mesh2Texture = new THREE.TextureLoader().load('./src/assets/textures/mini2.png');
mesh2Texture.wrapS = mesh2Texture.wrapT = THREE.RepeatWrapping;

const mesh3mat = new THREE.MeshStandardMaterial(commonAttributes);
mesh3Texture = new THREE.TextureLoader().load('./src/assets/textures/mini3.png');
mesh3Texture.wrapS = mesh3Texture.wrapT = THREE.RepeatWrapping;

const mesh4mat = new THREE.MeshStandardMaterial(commonAttributes);
mesh4Texture = new THREE.TextureLoader().load('./src/assets/textures/mini4.png');
mesh4Texture.wrapS = mesh4Texture.wrapT = THREE.RepeatWrapping;

const mesh5mat = new THREE.MeshStandardMaterial(commonAttributes);
mesh5Texture = new THREE.TextureLoader().load('./src/assets/textures/mini9.png');
mesh5Texture.wrapS = mesh5Texture.wrapT = THREE.RepeatWrapping;

const mesh6mat = new THREE.MeshStandardMaterial(commonAttributes);
mesh6Texture = new THREE.TextureLoader().load('./src/assets/textures/mini10.png');
mesh6Texture.wrapS = mesh6Texture.wrapT = THREE.RepeatWrapping;

const mesh7mat = new THREE.MeshStandardMaterial(commonAttributes);
mesh7Texture = new THREE.TextureLoader().load('./src/assets/textures/mini11.png');
mesh7Texture.wrapS = mesh7Texture.wrapT = THREE.RepeatWrapping;

const mesh9mat = new THREE.MeshStandardMaterial(commonAttributes);
mesh9Texture = new THREE.TextureLoader().load('./src/assets/textures/mini5.png');
mesh9Texture.wrapS = mesh9Texture.wrapT = THREE.RepeatWrapping;

const mesh10mat = new THREE.MeshStandardMaterial(commonAttributes);
mesh10Texture = new THREE.TextureLoader().load('./src/assets/textures/mini6.png');
mesh10Texture.wrapS = mesh10Texture.wrapT = THREE.RepeatWrapping;

const mesh11mat = new THREE.MeshStandardMaterial(commonAttributes);
mesh11Texture = new THREE.TextureLoader().load('./src/assets/textures/mini8.png');
mesh11Texture.wrapS = mesh11Texture.wrapT = THREE.RepeatWrapping;

const mesh12mat = new THREE.MeshStandardMaterial(commonAttributes);
mesh12Texture = new THREE.TextureLoader().load('./src/assets/textures/mini7.png');
mesh12Texture.wrapS = mesh12Texture.wrapT = THREE.RepeatWrapping;

const mesh13mat = new THREE.MeshStandardMaterial(commonAttributes);
mesh13Texture = new THREE.TextureLoader().load('./src/assets/textures/mini13.png');
mesh13Texture.wrapS = mesh13Texture.wrapT = THREE.RepeatWrapping;

const mesh14mat = new THREE.MeshStandardMaterial(commonAttributes);
mesh14Texture = new THREE.TextureLoader().load('./src/assets/textures/mini14.png');
mesh14Texture.wrapS = mesh14Texture.wrapT = THREE.RepeatWrapping;