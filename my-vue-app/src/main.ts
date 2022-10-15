import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const scene = new THREE.Scene();

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 'light-blue' });

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg')!, antialias: true });

const pointLight = new THREE.PointLight(0xFFFFFF)
pointLight.position.set(20, 20, 20)

const gridHelper = new THREE.GridHelper(200, 50)
const lightHelper = new THREE.PointLightHelper(pointLight)

scene.add(lightHelper, gridHelper,)
const ambientLight = new THREE.AmbientLight(0xFFFFF)
scene.add(pointLight, ambientLight)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30)

const controls = new OrbitControls(camera, renderer.domElement)
renderer.setAnimationLoop(animation);

// animation

function animation(time: number) {

  mesh.rotation.x = time / 1000;
  mesh.rotation.y = time / 1000;
  controls.update()
  renderer.render(scene, camera);

}