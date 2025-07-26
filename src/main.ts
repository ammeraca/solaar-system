import * as THREE from 'three';
import { Planet } from './planet';
import { Star } from './star';
import { Satellite } from './satellite';
import { drawOrbit } from './utils/drawCircle';

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
camera.position.set(0, 0, 10);

const sun = new Star({
  geometry: new THREE.SphereGeometry(1, 32, 32),
  material: new THREE.MeshBasicMaterial({ color: 0xffcc00 }),
  light: new THREE.PointLight(0xffffff, 100, 1000),
});
const earth = new Planet({
  geometry: new THREE.SphereGeometry(0.3, 32, 32),
  material: new THREE.MeshLambertMaterial({ color: 0x0000ff }),
  orbitRadius: 5,
});
const moon = new Satellite({
  geometry: new THREE.SphereGeometry(0.1, 32, 32),
  material: new THREE.MeshLambertMaterial({ color: 0xaaaaaa }),
  orbitRadius: 0.7,
});

const circleGeometry = new THREE.CircleGeometry(earth.orbitRadius, 64);

scene.add(drawOrbit(earth.orbitRadius, 1));

earth.addSatellite(moon);
sun.addPlanet(earth);

scene.add(sun.mesh);

renderer.setAnimationLoop(() => {
  earth.orbit(Date.now(), 0.0001);
  moon.orbit(Date.now(), 0.01);
  earth.rotate(0.01);
  moon.rotate(0.01);
  renderer.render(scene, camera);
});

// function animate() {
//     requestAnimationFrame(animate);
//     // cube.rotation.x += 0.01;
//     // cube.rotation.y += 0.01;
//     controls.update();
//     renderer.render(scene, camera);
// }
// animate();
