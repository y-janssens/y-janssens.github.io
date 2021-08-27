let modelPromise;
const baseModel = 'lite_mobilenet_v2';

const animate2 = function() {
    requestAnimationFrame(animate2);

    testMesh.rotation.y += 0.01;

    renderer.render(scene, camera);
};

window.onload = async () => {
    console.time('loading time');
    modelPromise = await cocoSsd.load(baseModel);
    console.timeEnd('loading time');
    loaded();
    console.log('model loaded.');
    console.log('model ready.');
}

function fileLoad() {
    console.clear();

    const img = document.querySelector('#fond');
    const runButton = document.querySelector('.valid');
    runButton.onclick = async () => {
        console.clear();
        const model = await modelPromise;
        console.time('time');
        const result = await model.detect(img);
        console.timeEnd('time');

        const c = $('#canvas2');
        const context = c.get(0).getContext('2d');
        context.drawImage(fond, 0, 0);
        context.font = '14px Arial';

        c.attr('width', $(fond).width());
        c.attr('height', $(fond).height());

        let x = c.width();
        let y = c.height();
        context.font = "15px Calibri";

        console.log('number of detections: ', result.length);
        console.log('Detection result: ', result);

        for (let i = 0; i < result.length; i++) {
            context.beginPath();
            context.rect(...result[i].bbox);
            context.lineWidth = 2;
            context.strokeStyle = '#1ac71a';
            context.fillStyle = '#1ac71a';
            context.stroke();

            //document.getElementById("area2").innerHTML = "Detection result : " + result[i].class;

            /* if (result[i].class == "dog") {
                document.getElementById("area2").innerHTML = "Success : " + result[i].class + "<br>" + "x : " + result[i].bbox[0].toFixed(2) + "<br>" + "y : " + result[i].bbox[1].toFixed(2);

                testMesh = new THREE.Mesh(
                    new THREE.BoxGeometry(1, 1, 1),
                    new THREE.MeshPhysicalMaterial({
                        color: 0xaca89f,
                        envMapIntensity: 0.75
                    })
                );
                testMesh.position.y = result[i].bbox[1] / 125;
                testMesh.position.x = result[i].bbox[0] / 75;
                testMesh.castShadow = true;
                testMesh.receiveShadow = true;
                scene.add(testMesh);
                testMesh.visible = true;

                animate2();
                console.log(testMesh.position.y)

            } else {
                document.getElementById("area2").innerHTML = "Failure : " + result[i].class;
            } */

            context.fillText(

                result[i].score.toFixed(3) * 100 + ' % ' + result[i].class, result[i].bbox[0],
                result[i].bbox[1] > 10 ? result[i].bbox[1] - 5 : 10);
        }
    };
}

function respondCanvas() {
    var c = $('#canvas2');

    c.attr('width', $(fond).width());
    c.attr('height', $(fond).height());

    var x = c.width();
    var y = c.height();
}

function dispose() {
    scene.remove(testMesh);
}