import * as THREE from 'three';
import { Satellite } from './satellite';

type planetProps = {
  material: THREE.MeshLambertMaterial;
  geometry: THREE.SphereGeometry;
  orbitRadius: number;
};

export class Planet {
  mesh: THREE.Mesh;
  orbitRadius: number;

  constructor({ geometry, material, orbitRadius }: planetProps) {
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.x = orbitRadius;
    this.orbitRadius = orbitRadius;
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
  }

  getPosition(): THREE.Vector3 {
    return this.mesh.position;
  }

  setPosition(x: number, y: number, z: number): void {
    this.mesh.position.set(x, y, z);
  }

  addSatellite(satellite: Satellite) {
    this.mesh.add(satellite.mesh);
  }

  orbit(time: number, speed: number): void {
    this.mesh.position.y = this.orbitRadius * Math.cos(speed * time);
    this.mesh.position.x = this.orbitRadius * Math.sin(speed * time);
  }

  rotate(speed: number): void {
    this.mesh.rotation.y += speed;
  }
}
