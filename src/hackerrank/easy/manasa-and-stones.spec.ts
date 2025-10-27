describe('manasa-and-stones.spec.ts', () => {
  function stones(n: number, a: number, b: number): number[] {
    const results = new Set<number>();

    for (let i = 0; i < n; i++) {
      const aLength = i;
      const bLength = n - 1 - i;

      results.add(aLength * a + bLength * b);
    }

    return [...results].sort((a, b) => a - b);
  }

  it('solution', () => {
    const result = stones(3, 1, 2);
    console.log(result);
  });
});
