import * as THREE from 'three';

export class CameraController {
  private camera: THREE.PerspectiveCamera;
  private target: THREE.Vector3;
  private distance: number;
  private minDistance: number;
  private maxDistance: number;
  private mouseX: number = 0;
  private mouseY: number = 0;
  private isMouseDown: boolean = false;
  private lastMouseX: number = 0;
  private lastMouseY: number = 0;

  constructor(
    camera: THREE.PerspectiveCamera,
    target: THREE.Vector3,
    initialDistance: number = 100
  ) {
    this.camera = camera;
    this.target = target.clone();
    this.distance = initialDistance;
    this.minDistance = 10;
    this.maxDistance = 10000;

    this.setupEventListeners();
    this.updateCamera();
  }

  private setupEventListeners(): void {
    // Mouse events
    document.addEventListener('mousedown', this.onMouseDown.bind(this));
    document.addEventListener('mousemove', this.onMouseMove.bind(this));
    document.addEventListener('mouseup', this.onMouseUp.bind(this));

    // Wheel event for zoom
    document.addEventListener('wheel', this.onWheel.bind(this));

    // Touch events for mobile
    document.addEventListener('touchstart', this.onTouchStart.bind(this));
    document.addEventListener('touchmove', this.onTouchMove.bind(this));
    document.addEventListener('touchend', this.onTouchEnd.bind(this));
  }

  private onMouseDown(event: MouseEvent): void {
    this.isMouseDown = true;
    this.lastMouseX = event.clientX;
    this.lastMouseY = event.clientY;
  }

  private onMouseMove(event: MouseEvent): void {
    if (!this.isMouseDown) return;

    const deltaX = event.clientX - this.lastMouseX;
    const deltaY = event.clientY - this.lastMouseY;

    this.mouseX += deltaX * 0.01;
    this.mouseY += deltaY * 0.01;

    // Clamp vertical rotation
    this.mouseY = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, this.mouseY));

    this.lastMouseX = event.clientX;
    this.lastMouseY = event.clientY;
  }

  private onMouseUp(): void {
    this.isMouseDown = false;
  }

  private onWheel(event: WheelEvent): void {
    event.preventDefault();
    const zoomSpeed = 0.1;
    this.distance += event.deltaY * zoomSpeed;
    this.distance = Math.max(
      this.minDistance,
      Math.min(this.maxDistance, this.distance)
    );
  }

  private onTouchStart(event: TouchEvent): void {
    if (event.touches.length === 1) {
      this.isMouseDown = true;
      this.lastMouseX = event.touches[0].clientX;
      this.lastMouseY = event.touches[0].clientY;
    }
  }

  private onTouchMove(event: TouchEvent): void {
    if (!this.isMouseDown || event.touches.length !== 1) return;

    const deltaX = event.touches[0].clientX - this.lastMouseX;
    const deltaY = event.touches[0].clientY - this.lastMouseY;

    this.mouseX += deltaX * 0.01;
    this.mouseY += deltaY * 0.01;

    this.mouseY = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, this.mouseY));

    this.lastMouseX = event.touches[0].clientX;
    this.lastMouseY = event.touches[0].clientY;
  }

  private onTouchEnd(): void {
    this.isMouseDown = false;
  }

  private updateCamera(): void {
    const x = this.distance * Math.cos(this.mouseY) * Math.sin(this.mouseX);
    const y = this.distance * Math.sin(this.mouseY);
    const z = this.distance * Math.cos(this.mouseY) * Math.cos(this.mouseX);

    this.camera.position.set(
      this.target.x + x,
      this.target.y + y,
      this.target.z + z
    );

    this.camera.lookAt(this.target);
  }

  public update(): void {
    this.updateCamera();
  }

  public setTarget(target: THREE.Vector3): void {
    this.target.copy(target);
  }

  // public getDistance(): number {
  //   return this.distance;
  // }

  // public setDistance(distance: number): void {
  //   this.distance = Math.max(
  //     this.minDistance,
  //     Math.min(this.maxDistance, distance)
  //   );
  // }

  // public resetView(): void {
  //   this.mouseX = 0;
  //   this.mouseY = 0;
  //   this.distance = 100;
  // }
}
