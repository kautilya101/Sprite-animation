const getRandom = (min, max) =>
  Math.random() * (max - min) + min;

const getRandomPath = () => {
  const steps = 8;
  const points = [{x:0,y:0}];
  for (let i = 1; i < steps; i++) {
    points.push({
      x: i * 15, // 0 → 100vw
      y: getRandom(-10, 20), // Stay within viewport vertically
    });
  }
  return points;
};

export { getRandom, getRandomPath}