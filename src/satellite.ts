import * as THREE from 'three';
import { Planet } from './planet';

type satelliteProps = {
  material: THREE.MeshLambertMaterial;
  geometry: THREE.SphereGeometry;
  orbitRadius: number;
};

export class Satellite extends Planet {
  constructor({ geometry, material, orbitRadius }: satelliteProps) {
    super({ geometry, material, orbitRadius });
  }

  orbit(time: number, speed: number): void {
    this.mesh.position.x = this.orbitRadius * Math.cos(speed * time);
    this.mesh.position.z = this.orbitRadius * Math.sin(speed * time);
  }
}
