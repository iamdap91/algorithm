describe('hurdle-race', () => {
  function hurdleRace(k: number, height: number[]): number {
    let max = 0;
    for (const h of height) {
      if (h > max) {
        max = h;
      }
    }

    if (k >= max) {
      return 0;
    }

    // const diff = Math.abs(max - k);
    return Math.abs(max - k);
  }

  it('hurdle-race', () => {
    const result = hurdleRace(4, [1, 6, 3, 5, 2]);
    console.log(result);
  });
});
