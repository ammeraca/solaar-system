export const astronomicalData = {
  order: {
    sun: 0,
    mercury: 1,
    venus: 2,
    earth: 3,
    mars: 4,
    jupiter: 5,
    saturn: 6,
    uranus: 7,
    neptune: 8,
    pluto: 9,
  },
  color: {
    sun: '#ffcc00',
    mercury: '#aaaaaa',
    venus: '#ffcc99',
    earth: '#0000ff',
    mars: '#ff3300',
    jupiter: '#ff9933',
    saturn: '#ffcc66',
    uranus: '#66ccff',
    neptune: '#3399ff',
    pluto: '#999999',
    satellites: {
      moon: '#cccccc',
    },
  },
  texture: {
    sun: 'textures/sun.jpg',
    mercury: 'textures/mercury.jpg',
    venus: 'textures/venus.jpg',
    earth: 'textures/earth.jpg',
    mars: 'textures/mars.jpg',
    jupiter: 'textures/jupiter.jpg',
    saturn: 'textures/saturn.jpg',
    uranus: 'textures/uranus.jpg',
    neptune: 'textures/neptune.jpg',
    pluto: 'textures/pluto.jpg',
  },
};
export const starData = {
  radius: {
    // en kilomètres
    sun: 696340,
  },
};

export const planetData = {
  radius: {
    // Real radius in kilometers
    mercury: 2439.7,
    venus: 6051.8,
    earth: 6371,
    mars: 3389.5,
    jupiter: 69911,
    saturn: 58232,
    uranus: 25362,
    neptune: 24622,
    pluto: 1188.3,
  },
  orbitalSpeed: {
    // Orbital speed in km/s
    mercury: 47.36,
    venus: 35.02,
    earth: 29.78,
    mars: 24.07,
    jupiter: 13.07,
    saturn: 9.68,
    uranus: 6.8,
    neptune: 5.43,
    pluto: 4.74,
  },
  orbitalRadius: {
    // Distance from sun in kilometers (semi-major axis)
    mercury: 57909175,
    venus: 108208930,
    earth: 149597870.7,
    mars: 227943824,
    jupiter: 778570000,
    saturn: 1433530000,
    uranus: 2870972200,
    neptune: 4498252900,
    pluto: 5906440628,
  },
  orbitalPeriod: {
    // Orbital period in Earth days
    mercury: 87.97,
    venus: 224.7,
    earth: 365.25,
    mars: 686.98,
    jupiter: 4332.59,
    saturn: 10759.22,
    uranus: 30688.5,
    neptune: 60182,
    pluto: 90520,
  },
};

export const satelliteData = {
  radius: {
    // en kilomètres
    moon: 1737.4,
  },
  orbitalSpeed: {
    // en km/s
    moon: 1.022,
  },
  orbitalRadius: {
    // en kilomètres
    moon: 384400,
  },
};
