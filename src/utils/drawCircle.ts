import * as THREE from 'three';

export function drawOrbit(radius, lineWidth) {
  const points: THREE.Vector3[] = [];

  // 360 full circle will be drawn clockwise
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
  // geometry.setPositions(points);
  // geometry.position.set(points);

  const material = new THREE.LineBasicMaterial({
    color: '#aaaaaa',
    linewidth: lineWidth,
  });

  return new THREE.LineLoop(geometry, material);
  // line.computeLineDistances();
}
