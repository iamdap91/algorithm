describe('picking-numbers', () => {
  function pickingNumbers(nums: number[]): number {
    const map = new Map();
    for (const num of nums) {
      const prev = map.get(num) || 0;
      map.set(num, prev + 1);
    }

    let max = 0;
    const keys = Array.from(map.keys()).sort((a, b) => a - b);
    for (const key of keys) {
      const smaller = map.get(key - 1) || 0;
      const match = map.get(key) || 0;
      const bigger = map.get(key + 1) || 0;

      const current =
        smaller + match > bigger + match ? smaller + match : bigger + match;
      if (current > max) {
        max = current;
      }
    }

    return max;
  }

  it('picking-numbers', () => {
    // const result = pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]);
    const result = pickingNumbers([4, 6, 5, 3, 3, 1]);
    console.log(result);
  });
});
