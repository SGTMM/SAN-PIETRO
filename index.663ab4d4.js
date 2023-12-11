var scene, renderer, camera, controls;
var model_ready_list = [
    false,
    false,
    false,
    false,
    false,
    false
];
var env_texture;
var texture, texture1;
var mesh;
var bg_status = 1;
var ui, container, title, text;
var objs_test = [];
var cube, cube1, cube2, cube3, cube4, cube5, arrow1, arrow2;
var statua1, statua2, statua3, statua4, statua5, statua6;
setTimeout(()=>{
    load_1();
    load_2();
    load_3();
    load_4();
    load_5();
    load_6();
}, 3000);
function load_1() {
    new GLTFLoader().load("./FILIPPO.glb", function(gltf) {
        statua1 = gltf.scene;
        model_ready_list[0] = true;
        statua1.position.y = -3;
        statua1.position.z = 3;
        for(var i = 0; i < model_ready_list.length; i++){
            if (!model_ready_list[i]) return;
        }
        console.log("models ready");
        start();
    });
}
function load_2() {
    new GLTFLoader().load("./IGNAZIO.glb", function(gltf) {
        statua2 = gltf.scene;
        model_ready_list[1] = true;
        statua2.position.y = -3;
        statua2.position.z = 3;
        for(var i = 0; i < model_ready_list.length; i++){
            if (!model_ready_list[i]) return;
        }
        console.log("models ready");
        start();
    });
}
function load_3() {
    new GLTFLoader().load("./GIOVANNI.glb", function(gltf) {
        statua3 = gltf.scene;
        model_ready_list[2] = true;
        statua3.position.y = -3;
        statua3.position.z = 3;
        for(var i = 0; i < model_ready_list.length; i++){
            if (!model_ready_list[i]) return;
        }
        console.log("models ready");
        start();
    });
}
function load_4() {
    new GLTFLoader().load("./SAN CAMILLO.glb", function(gltf) {
        statua4 = gltf.scene;
        model_ready_list[3] = true;
        statua4.position.y = -3;
        statua4.position.z = 3;
        for(var i = 0; i < model_ready_list.length; i++){
            if (!model_ready_list[i]) return;
        }
        console.log("models ready");
        start();
    });
}
function load_5() {
    new GLTFLoader().load("./TERESA.glb", function(gltf) {
        statua5 = gltf.scene;
        model_ready_list[4] = true;
        statua5.position.y = -3;
        statua5.position.z = 3;
        for(var i = 0; i < model_ready_list.length; i++){
            if (!model_ready_list[i]) return;
        }
        console.log("models ready");
        start();
    });
}
function load_6() {
    new GLTFLoader().load("./VINCENZO.glb", function(gltf) {
        statua6 = gltf.scene;
        model_ready_list[5] = true;
        statua6.position.y = -3;
        statua6.position.z = 3;
        for(var i = 0; i < model_ready_list.length; i++){
            if (!model_ready_list[i]) return;
        }
        console.log("models ready");
        start();
    });
}
var raycaster, pointer;
function start() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0006b1);
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.6;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    controls = new OrbitControls(camera, renderer.domElement);
    window.addEventListener("resize", function() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
    document.body.appendChild(renderer.domElement);
    var ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    raycaster = new THREE.Raycaster();
    touch = new THREE.Vector2();
    clock = new THREE.Clock();
    scene.add(statua1, statua2, statua3, statua4, statua5, statua6);
    statua1.visible = false;
    statua2.visible = false;
    statua3.visible = false;
    statua4.visible = false;
    statua5.visible = false;
    statua6.visible = false;
    camera.position.set(0, 0, 0.01);
    texture = new THREE.TextureLoader().load("./8.png");
    texture1 = new THREE.TextureLoader().load("./10.jpg");
    const geometry = new THREE.SphereGeometry(500, 2000, 2000);
    // invert the geometry on the x-axis so that all of the faces point inward
    geometry.scale(-1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
        map: texture
    });
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    cube = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 2, 30), new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        opacity: 0.5,
        transparent: true
    }));
    cube.name = "statue1";
    objs_test.push(cube);
    scene.add(cube);
    //cube.visible = false
    cube.scale.set(2, 3, 2);
    cube.position.x = 4.5;
    cube.position.y = 1;
    cube.position.z = 7;
    cube1 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 2, 30), new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        opacity: 0.5,
        transparent: true
    }));
    cube1.name = "statue2";
    objs_test.push(cube1);
    scene.add(cube1);
    //cube1.visible = false
    cube1.position.x = -1.5;
    cube1.position.z = -4;
    cube4 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 3, 30), new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        opacity: 0.5,
        transparent: true
    }));
    cube4.name = "statue3";
    objs_test.push(cube4);
    scene.add(cube4);
    cube4.visible = false;
    cube5 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 3, 30), new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        opacity: 0.5,
        transparent: true
    }));
    cube5.name = "statue4";
    objs_test.push(cube5);
    scene.add(cube5);
    cube5.visible = false;
    cube3 = new THREE.Group();
    var part1 = new THREE.Mesh(new THREE.BoxGeometry(1, 0.24, 1), new THREE.MeshBasicMaterial({
        color: 0x00ff00
    }));
    part1.rotation.y = Math.PI / 4;
    part1.name = "statue_arrow";
    var part2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
        color: 0x00ff00
    }));
    part2.position.z = 0.8;
    part2.scale.z = 1.8;
    part2.scale.y = 0.2;
    part2.scale.x = 1;
    part2.name = "statue_arrow";
    cube3.add(part1, part2);
    cube3.name = "statue_arrow";
    objs_test.push(cube3);
    scene.add(cube3);
    cube3.position.x = 2;
    cube3.position.y = -2;
    cube3.position.z = -1;
    cube3.rotation.y = -Math.PI / 4 - Math.PI / 8;
    //cube1.visible = false
    ui = new THREE.Group();
    container = new ThreeMeshUI.Block({
        width: 1.5,
        height: 0.9,
        padding: 0.2,
        justifyContent: "center",
        contentDirection: "column",
        fontFamily: FontJSON,
        fontTexture: FontImage,
        backgroundColor: new THREE.Color(0xe7e7e7),
        backgroundOpacity: 0.2
    });
    var container2 = new ThreeMeshUI.Block({
        width: 1.5,
        height: 0.3,
        padding: 0.2,
        justifyContent: "center",
        fontFamily: FontJSON,
        fontTexture: FontImage,
        backgroundOpacity: 0
    });
    var container3 = new ThreeMeshUI.Block({
        width: 1.5,
        height: 0.6,
        padding: 0.2,
        justifyContent: "center",
        fontFamily: FontJSON,
        fontTexture: FontImage,
        backgroundOpacity: 0
    });
    title = new ThreeMeshUI.Text({
        content: "SAN VITTORE",
        fontSize: 0.075
    });
    text = new ThreeMeshUI.Text({
        content: "Some text to be displayed"
    });
    container2.add(title);
    container3.add(text);
    container.add(container2, container3);
    ui.add(container);
    ui.position.y = -1;
    ui.position.z = 1;
    container.rotation.x = -Math.PI / 8;
    // scene is a THREE.Scene (see three.js)
    scene.add(ui);
    update();
}
function update() {
    delta = clock.getDelta();
    camera.updateProjectionMatrix();
    ui.lookAt(new THREE.Vector3(0, 0, 0));
    ThreeMeshUI.update();
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(update);
}
function windowResized() {
    resizeCanvas3D(windowWidth, windowHeight);
}
window.addEventListener("touchstart", function(event) {
    event.preventDefault();
    // Get touch position in normalized device coordinates (NDC)
    touch.x = event.touches[0].clientX / window.innerWidth * 2 - 1;
    touch.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
    raycast();
});
function raycast() {
    // Update the picking ray with the camera and mouse position
    raycaster.setFromCamera(touch, camera);
    // calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects(objs_test);
    for(let i = 0; i < intersects.length; i++){
        console.log(intersects[i].object.name);
        if (intersects[i].object.name.includes("statue")) {
            if (intersects[i].object.name === "statue_arrow") {
                ui.visible = false;
                if (bg_status === 1) {
                    bg_status = 2;
                    cube4.visible = true;
                    cube5.visible = true;
                    mesh.material = new THREE.MeshBasicMaterial({
                        map: texture1
                    });
                    cube.position.x = -14.5;
                    cube.position.y = 10;
                    cube.position.z = -4;
                    cube1.position.x = 9.5;
                    cube1.position.y = 2.5;
                    cube1.position.z = 0.5;
                    cube4.position.x = -3.5;
                    cube4.position.y = 4;
                    cube4.position.z = -20;
                    cube5.position.x = 9.5;
                    cube5.position.y = 2.5;
                    cube5.position.z = -10;
                    cube3.position.x = 0;
                    cube3.position.y = -2;
                    cube3.position.z = 2;
                    cube3.rotation.y = Math.PI;
                } else if (bg_status === 2) {
                    bg_status = 1;
                    cube4.visible = false;
                    cube5.visible = false;
                    mesh.material = new THREE.MeshBasicMaterial({
                        map: texture
                    });
                    cube.position.x = 4.5;
                    cube.position.y = 1;
                    cube.position.z = 7;
                    cube1.position.x = -1.5;
                    cube1.position.y = 0;
                    cube1.position.z = -4;
                    cube3.position.x = 2;
                    cube3.position.y = -2;
                    cube3.position.z = -1;
                    cube3.rotation.y = -Math.PI / 4 - Math.PI / 8;
                } else if (bg_status === 3) {
                    bg_status = 1;
                    mesh.visible = true;
                    cube.visible = true;
                    cube1.visible = true;
                    cube4.visible = true;
                    cube5.visible = true;
                    statua1.visible = false;
                    statua2.visible = false;
                    statua3.visible = false;
                    statua4.visible = false;
                    statua5.visible = false;
                    statua6.visible = false;
                    cube4.visible = false;
                    cube5.visible = false;
                    mesh.material = new THREE.MeshBasicMaterial({
                        map: texture
                    });
                    cube.position.x = 4.5;
                    cube.position.y = 1;
                    cube.position.z = 7;
                    cube1.position.x = -1.5;
                    cube1.position.y = 0;
                    cube1.position.z = -4;
                    cube3.position.x = 2;
                    cube3.position.y = -2;
                    cube3.position.z = -1;
                    cube3.rotation.y = -Math.PI / 4 - Math.PI / 8;
                }
            }
            if (intersects[i].object.name === "statue1") {
                ui.visible = true;
                if (bg_status === 2) {
                    title.set({
                        content: "STATUE Dl SAN VINCENZO DE PAOLI E SAN GIOVANNI EUDES"
                    });
                    text.set({
                        content: "San Vincenzo de' Paoli (1581-1660) fu un sacerdote francese celebre per la sua dedizione caritevole, fondando la Congregazione della Missione, diventando patrono delle opere caritative. San Giovanni Eudes (1601-1680), sacerdote francese, fondatore della Congregazione di Cristo e Maria, dedicando la sua vita alla promozione della devozione al Sacro Cuore."
                    });
                    mesh.visible = false;
                    cube.visible = false;
                    cube1.visible = false;
                    cube4.visible = false;
                    cube5.visible = false;
                    statua6.visible = true;
                    cube3.position.x = 0;
                    cube3.position.y = -2;
                    cube3.position.z = -2;
                    cube3.rotation.y = 0;
                } else if (bg_status === 1) {
                    title.set({
                        content: "MONUMENTO A SANT'IGNAZIO"
                    });
                    text.set({
                        content: "Sant'Ignazio di Loyola (1491-1556), fondatore della Compagnia di Cristo, ha lasciato un'impronta duratura sulla fede cristiana con gli Esercizi Spirituali, creando un ordine religioso impegnato nell'istruzione e nella missione; la sua festa viene celebrata il 31 luglio."
                    });
                    mesh.visible = false;
                    cube.visible = false;
                    cube1.visible = false;
                    cube4.visible = false;
                    cube5.visible = false;
                    statua2.visible = true;
                    cube3.position.x = 0;
                    cube3.position.y = -2;
                    cube3.position.z = -2;
                    cube3.rotation.y = 0;
                }
                bg_status = 3;
            } else if (intersects[i].object.name === "statue2") {
                ui.visible = true;
                if (bg_status === 2) {
                    title.set({
                        content: "STATUE Dl SAN CAMILLO DE LELLIS E SAN LUIGI MARIA GRIGNON DE MONTFORT"
                    });
                    text.set({
                        content: "San Camillo de Lellis (1550-1614), fondatore dei Camilliani, dedicato all'assistenza agli ammalati. San Luigi Maria Grignion de Montfort (1673-1716), fondatore dei Montfortani, sostenitore della 'Consacrazione Totale' a Maria, influenzando profondamente la fede cattolica. Entrambi celebri per il servizio e l'impatto duraturo nella tradizione cristiana."
                    });
                    mesh.visible = false;
                    cube.visible = false;
                    cube1.visible = false;
                    cube4.visible = false;
                    cube5.visible = false;
                    statua4.visible = true;
                    cube3.position.x = 0;
                    cube3.position.y = -2;
                    cube3.position.z = -2;
                    cube3.rotation.y = 0;
                } else if (bg_status === 1) {
                    title.set({
                        content: "STATUE Dl SAN FILIPPO NERI E SAN GIOVANNI BATTISTA DE LA SALLE"
                    });
                    text.set({
                        content: "San Filippo Neri (1515-1595), sacerdote italiano, fondatore dell'Oratorio, noto per la sua gioia contagiosa e l'amore per gli altri. San Giovanni Battista de La Salle (1651-1719), educatore francese, fondatore degli Istituti Cristiani per l'istruzione gratuita. Entrambi sono ricordati per l'impatto sociale e il contributo all'educazione"
                    });
                    mesh.visible = false;
                    cube.visible = false;
                    cube1.visible = false;
                    cube4.visible = false;
                    cube5.visible = false;
                    statua1.visible = true;
                    cube3.position.x = 0;
                    cube3.position.y = -2;
                    cube3.position.z = -2;
                    cube3.rotation.y = 0;
                }
                bg_status = 3;
            } else if (intersects[i].object.name === "statue4") {
                ui.visible = true;
                title.set({
                    content: "STATUA Dl SAN GIOVANNI BOSCO"
                });
                text.set({
                    content: "San Giovanni Bosco (1815-1888), sacerdote e educatore italiano, fondatore della Congregazione Salesiana, dedicata all'assistenza e all'istruzione dei giovani, in particolare degli svantaggiati. La sua statua spesso lo raffigura con un atteggiamento paterno, simbolo del suo impegno nella guida spirituale e nell'educazione. San Giovanni Bosco viene venerato come il patrono dei giovani e degli educatori."
                });
                mesh.visible = false;
                cube.visible = false;
                cube1.visible = false;
                cube4.visible = false;
                cube5.visible = false;
                statua3.visible = true;
                cube3.position.x = 0;
                cube3.position.y = -2;
                cube3.position.z = -2;
                cube3.rotation.y = 0;
                bg_status = 3;
            } else if (intersects[i].object.name === "statue3") {
                ui.visible = true;
                title.set({
                    content: "STATUE Dl SANTA TERESA Dl CRISTO E SANTA MADDALENA SOFIA BARAT"
                });
                text.set({
                    content: "Santa Teresa d'Avila (1515-1582), mistica spagnola e fondatrice delle Carmelitane Scalze, spesso raffigurata con un libro, simbolo della sua profonda fede e dei suoi scritti mistici. Santa Maddalena Sofia Barat (1779-1865), religiosa francese e fondatrice del Sacro Cuore di Ges\xf9, solitamente rappresentata con il cuore tra le mani, simbolo della dedizione alla fede e all'educazione."
                });
                mesh.visible = false;
                cube.visible = false;
                cube1.visible = false;
                cube4.visible = false;
                cube5.visible = false;
                statua5.visible = true;
                cube3.position.x = 0;
                cube3.position.y = -2;
                cube3.position.z = -2;
                cube3.rotation.y = 0;
                bg_status = 3;
            }
        }
        return;
    }
}
function onPointerMove() {
    raycast()
}

window.addEventListener("mousedown", onPointerMove);

window.addEventListener('mousemove', function (event) {
    touch.x = (event.clientX / window.innerWidth) * 2 - 1;
    touch.y = - (event.clientY / window.innerHeight) * 2 + 1;
});

//# sourceMappingURL=index.663ab4d4.js.map
