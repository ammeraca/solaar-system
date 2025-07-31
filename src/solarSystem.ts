import * as THREE from 'three';
import { Star } from './star';
import { Planet } from './planet';
import {
  astronomicalData,
  planetData,
  starData,
} from './constants/astronomicalConstants';
import {
  ORBITAL_SPEED_SCALE,
  PLANET_SCALE_FACTOR,
  SCALE_FACTOR,
  SUN_SCALE_FACTOR,
} from './constants/globalConstants';
import { drawOrbit } from './utils/drawCircle';

export class SolarSystem {
  private sun: Star;
  private planets: Array<Planet>;
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.createSun();
    this.createPlanets();
    this.setupOrbits();
  }

  private createSun(): void {
    this.sun = new Star({
      geometry: new THREE.SphereGeometry(
        starData.radius.sun * SUN_SCALE_FACTOR,
        64,
        64
      ),
      material: new THREE.MeshBasicMaterial({
        color: astronomicalData.color.sun,
      }),
      name: 'sun',
      light: new THREE.PointLight(0xffffff, 10000, 0),
    });

    this.scene.add(this.sun.mesh);
  }

  private createPlanets(): void {
    this.planets = [];
    const planetConfigs = [
      { name: 'mercury', color: astronomicalData.color.mercury },
      { name: 'venus', color: astronomicalData.color.venus },
      { name: 'earth', color: astronomicalData.color.earth },
      { name: 'mars', color: astronomicalData.color.mars },
      { name: 'jupiter', color: astronomicalData.color.jupiter },
      { name: 'saturn', color: astronomicalData.color.saturn },
      { name: 'uranus', color: astronomicalData.color.uranus },
      { name: 'neptune', color: astronomicalData.color.neptune },
      { name: 'pluto', color: astronomicalData.color.pluto },
    ];

    planetConfigs.forEach((data) => {
      const planetRadius = planetData.radius[data.name];
      const planetOrbitalRadius = planetData.orbitalRadius[data.name];

      const planet = new Planet({
        geometry: new THREE.SphereGeometry(
          planetRadius * PLANET_SCALE_FACTOR,
          32,
          32
        ),
        material: new THREE.MeshLambertMaterial({
          // FIXME: Use MeshLambertMaterial for better lighting
          color: data.color,
        }),
        name: data.name,
        orbitRadius: planetOrbitalRadius * SCALE_FACTOR,
      });

      this.planets.push(planet);
      this.sun.addPlanet(planet);
    });
  }

  private setupOrbits(): void {
    this.planets.forEach((planet) => {
      const orbitLine = drawOrbit(planet.orbitRadius, 1);
      this.scene.add(orbitLine);
    });
  }

  public animate(time: number): void {
    this.planets.forEach((planet) => {
      const orbitalPeriod = planetData.orbitalPeriod[planet.name];
      const speed = ((2 * Math.PI) / (orbitalPeriod * 24 * 60 * 60)) * 100;
      console.log(speed);
      planet.orbit(time, speed);
      planet.rotate(0.01); // Rotation speed
    });
  }

  public getSun(): Star {
    return this.sun;
  }

  public getPlanets(): Array<Planet> {
    return this.planets;
  }

  public getPlanet(name: string): Planet | undefined {
    return this.planets.find((planet) => planet.name === name);
  }
}
