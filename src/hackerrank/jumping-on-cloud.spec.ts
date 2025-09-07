function jumpingOnClouds(clouds: number[], jumpDistance: number): number {
  let energy = 100;

  let i = 0;
  do {
    if (i === clouds.length) {
      return energy;
    }

    const isThunder = clouds[i];
    if (isThunder) {
      energy -= 3;
    } else {
      energy -= 1;
    }

    i += jumpDistance;

    if (i > clouds.length) {
      i = i % clouds.length;
    }
  } while (i < clouds.length);

  return energy;
}

it('jumping-on-cloud', () => {
  // const result = jumpingOnClouds([0, 0, 1, 0], 2);
  // const result = jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2);
  const result = jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3);
  console.log(result);
});
