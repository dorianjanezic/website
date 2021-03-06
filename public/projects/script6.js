import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';
import { DragControls } from "https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/controls/DragControls.js";
import { OrbitControls } from "https://threejsfundamentals.org/threejs/resources/threejs/r119/examples/jsm/controls/OrbitControls.js";


function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas});
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  const fov = 50;
  const aspect = window.innerWidth / window.innerHeight;  // the canvas default
  const near = 1;
  const far = 1000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 100;
  let controls;

  renderer.shadowMap.enabled = true;

  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputEncoding = THREE.sRGBEncoding;

  const scene = new THREE.Scene();

  const boxWidth = 20;
  const boxHeight =20;
  const boxDepth = 20;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  const geometry1 = new THREE.BoxGeometry(40, 32, 2);
  const geometry2 = new THREE.BoxGeometry(25, 20, 6);
  const geometry3 = new THREE.BoxGeometry(30, 26, 2);
  const pointLight = new THREE.AmbientLight(0xffffff)
  pointLight.position.set(5,5,5100).normalize()
  const bgtexture = new THREE.TextureLoader().load('untld2.png')
  // geometry.translate()


  const cubes = [];  // just an array we can use to rotate the cubes
  const cubes1 = [];  
  const cubes2 = [];
  const cubes3 = [];
  const loadManager = new THREE.LoadingManager();
  const loader = new THREE.TextureLoader(loadManager);

  const materials = [
    new THREE.MeshStandardMaterial({map: loader.load('wt-2.png')}),
    new THREE.MeshStandardMaterial({map: loader.load('wt-2.png')}),
    new THREE.MeshStandardMaterial({map: loader.load('wt-2.png')}),
    new THREE.MeshStandardMaterial({map: loader.load('wt-2.png')}),
    new THREE.MeshStandardMaterial({map: loader.load('wt-2.png')}),
    new THREE.MeshStandardMaterial({map: loader.load('wt-2.png')}),
  ];

  const materials1 = [
    new THREE.MeshBasicMaterial({map: loader.load('Scr.png')}),
    new THREE.MeshBasicMaterial({map: loader.load('Scr.png')}),
    new THREE.MeshBasicMaterial({map: loader.load('Scr.png')}),
    new THREE.MeshBasicMaterial({map: loader.load('Scr.png')}),
    new THREE.MeshBasicMaterial({map: loader.load('Scr.png')}),
    new THREE.MeshBasicMaterial({map: loader.load('Scr.png')}),
  ];

  const materials3 = [
    new THREE.MeshBasicMaterial({map: loader.load('ls1.JPG')}),
    new THREE.MeshBasicMaterial({map: loader.load('ls2.JPG')}),
    new THREE.MeshBasicMaterial({map: loader.load('ls1.JPG')}),
    new THREE.MeshBasicMaterial({map: loader.load('ls1.JPG')}),
    new THREE.MeshBasicMaterial({map: loader.load('ls2.JPG')}),
    new THREE.MeshBasicMaterial({map: loader.load('ls2.JPG')}),
  ];

  const materials2 = [
    new THREE.MeshBasicMaterial({map: loader.load('untld.png')}),
    new THREE.MeshBasicMaterial({map: loader.load('untld2.png')}),
    new THREE.MeshBasicMaterial({map: loader.load('untld3.png')}),
    new THREE.MeshBasicMaterial({map: loader.load('untld3.png')}),
    new THREE.MeshBasicMaterial({map: loader.load('untld.png')}),
    new THREE.MeshBasicMaterial({map: loader.load('untld2.png')}),
  ];

  const loadingElem = document.querySelector('#loading');
  const progressBarElem = loadingElem.querySelector('.progressbar');

  loadManager.onLoad = () => {
    loadingElem.style.display = 'none';
    const cube = new THREE.Mesh(geometry, materials);
    const cube1 = new THREE.Mesh(geometry1, materials1);
    const cube2 = new THREE.Mesh(geometry2, materials2);
    const cube3 = new THREE.Mesh(geometry3, materials3);
    // const cube3 = new THREE.Mesh(geometry3, materials3);
    cube.position.set(-6,35,-16)
    cube1.position.set(10,-40,-20)
    cube2.position.set(15,10,-28)
    cube3.position.set(-15,-10,-17)
    

    scene.add(cube, cube1, cube2, cube3, pointLight);
    cubes.push(cube);
    cubes1.push(cube1)  // add to our list of cubes to rotate
    cubes2.push(cube2) 
    cubes3.push(cube3)
    // scene.background = bgtexture;
  };

  loadManager.onProgress = (urlOfLastItemLoaded, itemsLoaded, itemsTotal) => {
    const progress = itemsLoaded / itemsTotal;
    progressBarElem.style.transform = `scaleX(${progress})`;
  };

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render(time) {
    time *= 0.001;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    cubes1.forEach((cube, ndx) => {
        const speed = 0.2 + ndx * .1;
        const rot = time * speed;
        // cube.rotation.z = rot;
        cube.rotation.y = -rot;
        cube.rotation.z = -0.2;
      });

      cubes.forEach((cube, ndx) => {
        const speed = 0.4 + ndx * .1;
        const rot = time * speed;
        // cube.rotation.z = rot;
        cube.rotation.y = rot;
        cube.rotation.z = -0.2;
      });

      cubes2.forEach((cube, ndx) => {
        const speed = 0.35 + ndx * .1;
        const rot = time * speed;
        // cube.rotation.z = rot;
        cube.rotation.z = rot;
        cube.rotation.y = -0.2;
        cube.rotation.x = rot
      });

      cubes3.forEach((cube, ndx) => {
        const speed = 0.35 + ndx * .1;
        const rot = time * speed;
        // cube.rotation.z = rot;
        // cube.rotation.y = rot;
        cube.rotation.z = rot*(-0.3);
        cube.rotation.x = rot/2
      });

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);

  controls = new OrbitControls( camera, renderer.domElement );
  controls.enableZoom = false;
				controls.listenToKeyEvents( window ); // optional

				//controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

				controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
				controls.dampingFactor = 0.05;

				controls.screenSpacePanning = false;

				controls.minDistance = 100;
				controls.maxDistance = 500;

				controls.maxPolarAngle = Math.PI / 2;

        DragControls = new DragControls( camera, renderer.domElement);

}

main();

