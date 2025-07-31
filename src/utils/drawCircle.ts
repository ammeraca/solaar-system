import * as THREE from 'three';

export function drawOrbit(radius: number, lineWidth: number) {
  const points: THREE.Vector3[] = [];

  for (let i = 0; i <= 360; i++) {
    points.push(
      new THREE.Vector3(
        Math.sin(i * (Math.PI / 180)) * radius,
        Math.cos(i * (Math.PI / 180)) * radius,
        0
      )
    );
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setFromPoints(points);

  const material = new THREE.LineBasicMaterial({
    color: '#aaaaaa',
    linewidth: lineWidth,
  });

  return new THREE.LineLoop(geometry, material);
}
