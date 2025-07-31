import * as THREE from 'three';
import { Planet } from './planet';
import { drawOrbit } from './utils/drawCircle';

type starProps = {
  material: THREE.MeshBasicMaterial;
  geometry: THREE.SphereGeometry;
  name: string;
  light: THREE.PointLight;
};

export class Star {
  name: string;
  mesh: THREE.Mesh;
  light: THREE.PointLight;

  constructor({ geometry, material, light, name }: starProps) {
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.add(light);
    this.light = light;
    this.light.castShadow = true;
    this.name = name;
  }

  setPosition(x: number, y: number, z: number): void {
    this.mesh.position.set(x, y, z);
  }

  addPlanet(planet: Planet): void {
    // drawOrbit(planet.orbitRadius, 1);
    this.mesh.add(planet.mesh);
  }
}
