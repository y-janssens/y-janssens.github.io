const tower_material = new THREE.MeshPhysicalMaterial();

wallTexture = new THREE.TextureLoader().load( './assets/textures/wallD2.jpg' );
wallTexture.wrapS = wallTexture.wrapT = THREE.RepeatWrapping;
wallTexture.repeat.set(10, 10);

wallNorm = new THREE.TextureLoader().load( './assets/textures/wallN2.jpg' );
wallNorm.wrapS = wallNorm.wrapT = THREE.RepeatWrapping;
wallNorm.repeat.set(10, 10);

wallRough = new THREE.TextureLoader().load( './assets/textures/wallR2.jpg' );
wallRough.wrapS = wallRough.wrapT = THREE.RepeatWrapping;
wallRough.repeat.set(10, 10);

loader.load(
	'./assets/obj/tower.obj', function (object) {			

	object.traverse(function(child){child.castShadow = true;});
	object.traverse(function(child){child.receiveShadow = true;});
    object.position.z -= 20.195;
    object.position.y -= 0.1;

	object.traverse( function( child ) {
	if ( child instanceof THREE.Mesh ) {

	child.material = tower_material;

	child.material.map = wallTexture;
	child.material.normalMap = wallNorm;
	child.material.roughnessMap = wallRough;

    child.material.envMapIntensity = 0.05; 
    child.material.roughness = 0.75;
    
    child.material.normalScale = new THREE.Vector2(0.25, 0.25);
		}
	} );

	tower = object ;
    tower.scale.set (0.5, 0.5, 0.5);
    scene.add (tower);

	});

loader.load(
    './assets/obj/tower2.obj', function (object) {			

    object.traverse(function(child){child.castShadow = true;});
    object.traverse(function(child){child.receiveShadow = true;});
    object.position.z -= 20.195;
    object.position.y -= 0.1;
    //object.position.x -= 8;

    object.traverse( function( child ) {
    if ( child instanceof THREE.Mesh ) {

        child.material = tower_material;

        child.material.map = wallTexture;
        child.material.normalMap = wallNorm;
        child.material.roughnessMap = wallRough;

        child.material.envMapIntensity = 0.05; 
        child.material.roughness = 0.75;
        
        child.material.normalScale = new THREE.Vector2(0.25, 0.25);
        }
    } );

    tower2 = object ;
    tower2.scale.set (0.5, 0.5, 0.5);
    scene.add (tower2);

    });

loader.load(
    './assets/obj/gate.obj', function (object) {			

    object.traverse(function(child){child.castShadow = true;});
    object.traverse(function(child){child.receiveShadow = true;});
    object.position.z -= 20.195;
    object.position.y -= 0.1;
    //object.position.x -= 8;

    object.traverse( function( child ) {
    if ( child instanceof THREE.Mesh ) {

        child.material = basic_material;

        /*child.material.map = wallTexture;
        child.material.normalMap = wallNorm;
        child.material.roughnessMap = wallRough;
        
        child.material.envMapIntensity = 0.05; 
        child.material.roughness = 0.75;
        
        child.material.normalScale = new THREE.Vector2(0.25, 0.25);*/
        }
    } );

    gate = object ;
    gate.scale.set (0.5, 0.5, 0.5);
    scene.add (gate);

    });
    
loader.load(
    './assets/obj/rempart1.obj', function (object) {			

    object.traverse(function(child){child.castShadow = true;});
    object.traverse(function(child){child.receiveShadow = true;});
    object.position.z -= 20.195;
    object.position.y -= 0.1;

    object.traverse( function( child ) {
    if ( child instanceof THREE.Mesh ) {

        child.material = basic_material;

        /*child.material.map = wallTexture;
        child.material.normalMap = wallNorm;
        child.material.roughnessMap = wallRough;
        
        child.material.envMapIntensity = 0.05; 
        child.material.roughness = 0.75;
        
        child.material.normalScale = new THREE.Vector2(0.25, 0.25);*/
        }
    } );

    rempart1 = object ;
    rempart1.scale.set (0.5, 0.5, 0.5);
    //scene.add (rempart1);

    });    
    
loader.load(
    './assets/obj/rempart2.obj', function (object) {			

    object.traverse(function(child){child.castShadow = true;});
    object.traverse(function(child){child.receiveShadow = true;});
    object.position.z -= 20.195;
    object.position.y -= 0.1;

    object.traverse( function( child ) {
    if ( child instanceof THREE.Mesh ) {

        child.material = basic_material;

        /*child.material.map = wallTexture;
        child.material.normalMap = wallNorm;
        child.material.roughnessMap = wallRough;
        
        child.material.envMapIntensity = 0.05; 
        child.material.roughness = 0.75;
        
        child.material.normalScale = new THREE.Vector2(0.25, 0.25);*/
        }
    } );

    rempart2 = object ;
    rempart2.scale.set (0.5, 0.5, 0.5);
    //scene.add (rempart2);

    });    
    
loader.load(
    './assets/obj/bloc1.obj', function (object) {			

    object.traverse(function(child){child.castShadow = true;});
    object.traverse(function(child){child.receiveShadow = true;});
    object.position.z -= 20.195;
    object.position.y -= 0.1;

    object.traverse( function( child ) {
    if ( child instanceof THREE.Mesh ) {

        child.material = basic_material;

        /*child.material.map = wallTexture;
        child.material.normalMap = wallNorm;
        child.material.roughnessMap = wallRough;
        
        child.material.envMapIntensity = 0.05; 
        child.material.roughness = 0.75;
        
        child.material.normalScale = new THREE.Vector2(0.25, 0.25);*/
        }
    } );

    bloc1 = object ;
    bloc1.scale.set (0.5, 0.5, 0.5);
    scene.add (bloc1);

    });  
    
loader.load(
    './assets/obj/bloc2.obj', function (object) {			

    object.traverse(function(child){child.castShadow = true;});
    object.traverse(function(child){child.receiveShadow = true;});
    object.position.z -= 20.195;
    object.position.y -= 0.1;

    object.traverse( function( child ) {
    if ( child instanceof THREE.Mesh ) {

        child.material = basic_material;

        /*child.material.map = wallTexture;
        child.material.normalMap = wallNorm;
        child.material.roughnessMap = wallRough;
        
        child.material.envMapIntensity = 0.05; 
        child.material.roughness = 0.75;
        
        child.material.normalScale = new THREE.Vector2(0.25, 0.25);*/
        }
    } );

    bloc2 = object ;
    bloc2.scale.set (0.5, 0.5, 0.5);
    scene.add (bloc2);

    });       
