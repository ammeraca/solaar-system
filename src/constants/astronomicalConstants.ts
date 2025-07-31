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
    // en kilomètres
    earth: 63710, // FIXME: Delete a 0
  },
  orbitalSpeed: {
    // en km/s
    earth: 29.78,
  },
  orbitalRadius: {
    // en kilomètres
    earth: 1495978.707, // FIXME: Multiply by 100
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

// export const EARTH_ORBITAL_PERIOD_DAYS = 365.25;
