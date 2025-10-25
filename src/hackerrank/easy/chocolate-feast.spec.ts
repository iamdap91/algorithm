describe('chocolate-feast', () => {
  function chocolateFeast(n: number, c: number, m: number): number {
    let current = Math.floor(n / c);
    let count = current;

    while (true) {
      const divided = Math.floor(current / m);
      count += divided;
      current = divided + (current % m);

      if (current < m) {
        break;
      }
    }

    return count;
  }

  it('solution', () => {
    // const result = chocolateFeast(15, 3, 2);
    // const result = chocolateFeast(10, 2, 5);
    const result = chocolateFeast(6, 2, 2);
    console.log(result);
  });
});
