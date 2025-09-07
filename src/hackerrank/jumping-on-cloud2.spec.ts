function jumpingOnClouds2(clouds: number[]): number {
  let jumps = 0;
  let current = 0;

  while (current < clouds.length - 1) {
    switch (true) {
      case clouds[current + 2] === 0:
        current += 2;
        jumps += 1;
        break;
      case clouds[current + 1] === 0:
        current += 1;
        jumps += 1;
        break;
      default:
        break;
    }
  }

  // console.log(current, jumps);
  return jumps;
}

it('jumping-on-cloud', () => {
  // const result = jumpingOnClouds2([0, 1, 0, 0, 0, 1, 0]);
  const result = jumpingOnClouds2([0, 0, 1, 0, 0, 1, 0]);
  console.log(result);
});
