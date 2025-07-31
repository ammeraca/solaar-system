const maxOrbitDistance = 250;
const radiusScale = 0.0005;

export const scaleOrbitDistance = (distance: number): number => {
  const logDistance = Math.log10(distance);
  const logMaxDistance = Math.log10(4500000000);

  return (logDistance / logMaxDistance) * maxOrbitDistance;
};
