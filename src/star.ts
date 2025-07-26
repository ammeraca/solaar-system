import * as THREE from 'three';
import { Planet } from './planet';

type starProps = {
  material: THREE.MeshBasicMaterial;
  geometry: THREE.SphereGeometry;
  light: THREE.PointLight;
};

export class Star {
  mesh: THREE.Mesh;
  light: THREE.PointLight;

  constructor({ geometry, material, light }: starProps) {
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.add(light);
    this.light = light;
    this.light.castShadow = true;
  }

  setPosition(x: number, y: number, z: number): void {
    this.mesh.position.set(x, y, z);
  }

  addPlanet(planet: Planet): void {
    this.mesh.add(planet.mesh);
    // this.light.position.copy(this.mesh.position);
  }
}
