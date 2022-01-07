class Card {
  constructor(id, position, matcolor, lightcolor, function_id) {
    this.id = id;
    this.position = position;
    this.matcolor = matcolor;
    this.lightcolor = lightcolor;
    this.function_id = function_id;
  }

  create() {
    let mesh = "mesh";
    let group = "group";
    let rectLight = "rectLight";
    mesh = mesh + this.id;
    group = group + this.id;
    rectLight = rectLight + this.id;
    let matcolor = this.matcolor;
    let lightcolor = this.lightcolor;
    let placement = number * this.position;
    let img_focus = "img" + this.function_id + "_focus";
    img_focus = false;
    let img = "#img" + this.function_id;
    let descri = ".descri" + this.function_id;
    let id = this.function_id;
    let target = "target" + this.function_id;
    let distance = "distance" + this.function_id;

    let meshmat = new THREE.MeshStandardMaterial({
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.15,
      emissiveIntensity: 0.75,
    });
    let meshTexture = new THREE.TextureLoader().load(
      "./src/assets/textures/mini" + this.id + ".png"
    );
    meshTexture.wrapS = meshTexture.wrapT = THREE.RepeatWrapping;

    rectLight = new THREE.RectAreaLight(lightcolor, 1, 4, 2.5);
    rectLight.lookAt(0, 0, 1);
    rectLight.castShadow = false;

    loader.load("./src/assets/card_uvs_low.obj", function (object) {
      object.traverse(function (child) {
        child.castShadow = true;
      });
      object.traverse(function (child) {
        child.receiveShadow = true;
      });

      object.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
          child.material = meshmat;
          child.material.color = new THREE.Color(matcolor);
          child.material.map = meshTexture;
          child.material.emissive = new THREE.Color(matcolor);
          child.material.emissiveMap = meshTexture;
        }
      });

      mesh = object;
      mesh.scale.set(0.28, 0.25, 1);
      mesh.position.y += 2.5;
      mesh.position.z += 25;
      mesh.rotation.x -= 0.1;

      mesh.add(rectLight);
      group = new THREE.Group();
      group.position.z -= 25;
      group.rotation.y = placement;
      group.add(mesh);
      scene.add(group);

      domEvents.addEventListener( mesh, clics, function (event) {
          if (id >= 1 && id <= 7) {
            if (img_focus) {
              img_focus == false;
              $("#container").css("visibility", "visible");
              $("#container").css("pointer-events", "initial");
              $(img).css("transition", "500ms all");
              $(img).css("transform", "translate(-50%, -50%) scale(1)");
              $(img).css("opacity", "1");
              $(img).css("visibility", "visible");
              $(descri).css("transition", "500ms all");
              $(descri).css("transform", "translate(-50%, -50%) scale(1)");
              $(descri).css("visibility", "visible");
              tooltip();
            } else {
              img_focus == true;
            }
            $("#container").on("touchstart click", function () {
              $("#container").css("visibility", "hidden");
              $("#container").css("pointer-events", "none");
              $(img).css("transition", "250ms all");
              $(img).css("transform", "translate(-50%, -50%) scale(0)");
              $(img).css("opacity", "0");
              $(img).css("visibility", "hidden");
              $(descri).css("transition", "250ms all");
              $(descri).css("transform", "translate(-50%, -50%) scale(0)");
              $(descri).css("visibility", "hidden");
            });
          } else if (id == 8) {
            if (img_focus) {
              img_focus == false;
              $("#container").css("visibility", "visible");
              $("#container").css("pointer-events", "initial");
              $("#battler").css("display", "initial");
            } else {
              img_focus == true;
            }
            $("#container").on("touchstart click", function () {
              $("#container").css("visibility", "hidden");
              $("#container").css("pointer-events", "none");
              $("#battler").css("display", "none");
            });
          } else if (id == 9) {
            if (img_focus) {
              img_focus == false;
              $("#container").css("visibility", "visible");
              $("#container").css("pointer-events", "initial");
              $("#clock").css("display", "initial");
            } else {
              img_focus == true;
            }
            $("#container").on("touchstart click", function () {
              $("#container").css("visibility", "hidden");
              $("#container").css("pointer-events", "none");
              $("#clock").css("display", "none");
            });
          } else if (id == 10) {
            if (img_focus) {
              img_focus == false;
              window.open("./site/Detection/index.html");
            } else {
              img_focus == true;
            }
          } else if (id == 11) {
            if (img_focus) {
              img_focus == false;
              window.open("./site/Herse/index.html");
            } else {
              img_focus == true;
            }
          } else if (id == 12) {
            let vid1 = document.getElementById("vid1");

            if (img_focus) {
              img_focus == false;
              $("#container").css("visibility", "visible");
              $("#container").css("pointer-events", "initial");
              $("#vid1").css("transition", "500ms all");
              $("#vid1").css("transform", "translate(-50%, -50%) scale(1)");
              $("#vid1").css("opacity", "1");
              $("#vid1").css("visibility", "visible");
              vid1.play();
              vid1.loop = true;
            } else {
              img_focus == true;
            }
            $("#container").on("touchstart click", function () {
              $("#container").css("visibility", "hidden");
              $("#container").css("pointer-events", "none");
              $("#vid1").css("transition", "250ms all");
              $("#vid1").css("transform", "translate(-50%, -50%) scale(0)");
              $("#vid1").css("opacity", "0");
              $("#vid1").css("visibility", "hidden");

              vid1.pause();
              vid1.currentTime = 0;
            });
          } else if (id == 13) {
            let vid2 = document.getElementById("vid2");

            if (img_focus) {
              img_focus == false;
              $("#container").css("visibility", "visible");
              $("#container").css("pointer-events", "initial");
              $("#vid2").css("transition", "500ms all");
              $("#vid2").css("transform", "translate(-50%, -50%) scale(1)");
              $("#vid2").css("opacity", "1");
              $("#vid2").css("visibility", "visible");
              vid2.play();
              vid2.loop = true;
            } else {
              img_focus == true;
            }
            $("#container").on("touchstart click", function () {
              $("#container").css("visibility", "hidden");
              $("#container").css("pointer-events", "none");
              $("#vid2").css("transition", "250ms all");
              $("#vid2").css("transform", "translate(-50%, -50%) scale(0)");
              $("#vid2").css("opacity", "0");
              $("#vid2").css("visibility", "hidden");
              vid2.pause();
              vid2.currentTime = 0;
            });
          }
        },
        false
      );
      function animation() {
        requestAnimationFrame(animation);
        const time = performance.now() * 0.001;
        mesh.position.y = Math.sin(time) * 0.25 + 2.5;

        target = new THREE.Vector3();
        mesh.getWorldPosition(target);
        distance = camera.position.distanceTo(target);

        if (distance < 10) {
          img_focus = true;
          mesh.position.lerp(cube1.position, 0.015);
          gsap.to(rectLight, 3, { intensity: 3 })
          gsap.to(meshmat, 10, { opacity: 0.75 })
          meshmat.color = new THREE.Color();
      } else {
          img_focus = false;
          mesh.position.lerp(cube2.position, 0.015);
          gsap.to(rectLight, 1, { intensity: 1 })
          gsap.to(meshmat, 1, { opacity: 0.25 })
          meshmat.color = new THREE.Color(0xc2bfb8);
      }
      }
      animation();
    });
  }
}
