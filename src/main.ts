import * as THREE from 'three';
import { Planet } from './planet';
import { Star } from './star';
import { Satellite } from './satellite';
import { drawOrbit } from './utils/drawCircle';
import {
  astronomicalData,
  planetData,
  satelliteData,
  starData,
} from './constants/astronomicalConstants';
import { SCALE_FACTOR } from './constants/globalConstants';
import { SolarSystem } from './solarSystem';
import { CameraController } from './cameraController';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  10000
);

const cameraController = new CameraController(
  camera,
  new THREE.Vector3(0, 0, 0),
  200 // Initial distance, increased for better view
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Optional: for softer shadows
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// scene.background = new THREE.Color(0x000011); // FIXME: Might remove this

const solarSystem = new SolarSystem(scene);

// const log = (x: number) => Math.log(x) / Math.log(10);

camera.position.set(0, 0, starData.radius.sun * SCALE_FACTOR * 5);

renderer.setAnimationLoop(() => {
  // camera.lookAt(earth.getPosition());
  const time = Date.now();
  solarSystem.animate(time);
  cameraController.update();

  renderer.render(scene, camera);
});
