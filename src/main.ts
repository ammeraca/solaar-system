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

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Optional: for softer shadows
document.body.appendChild(renderer.domElement);

const log = (x: number) => Math.log(x) / Math.log(10);

camera.position.set(0, 0, starData.radius.sun * SCALE_FACTOR * 2);

const sun = new Star({
  geometry: new THREE.SphereGeometry(
    starData.radius.sun * SCALE_FACTOR,
    64,
    64
  ),
  material: new THREE.MeshBasicMaterial({ color: astronomicalData.color.sun }),
  light: new THREE.PointLight(0xffffff, 10000, 0),
});

const earth = new Planet({
  geometry: new THREE.SphereGeometry(
    planetData.radius.earth * SCALE_FACTOR,
    32,
    32
  ),
  material: new THREE.MeshLambertMaterial({
    color: astronomicalData.color.earth,
  }),
  orbitRadius: planetData.orbitalRadius.earth * SCALE_FACTOR,
});

// const moon = new Satellite({
//   geometry: new THREE.SphereGeometry(satelliteData.radius.moon, 32, 32),
//   material: new THREE.MeshLambertMaterial({
//     color: astronomicalData.color.satellites.moon,
//   }),
//   orbitRadius: satelliteData.orbitalRadius.moon,
// });

scene.add(drawOrbit(earth.orbitRadius, 1));

// earth.addSatellite(moon);
sun.addPlanet(earth);

scene.add(sun.mesh);

renderer.setAnimationLoop(() => {
  camera.lookAt(earth.getPosition());
  earth.orbit(Date.now(), 0.0001);
  // moon.orbit(Date.now(), 0.01);
  earth.rotate(0.01);
  // moon.rotate(0.01);
  renderer.render(scene, camera);
});
