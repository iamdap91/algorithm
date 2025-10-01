describe('factorial.spec.ts', () => {
  function factorial(n: number): number {
    if (n === 1) {
      return 1;
    }

    return n * factorial(n - 1);
  }

  it('solution', () => {
    const result = factorial(5);
    console.log(result);
  });
});
