describe('dynamic-programming.spec.ts', () => {
  describe('fibo', () => {
    function fiboRecursive(n: number): number {
      if (n <= 2) {
        return 1;
      }

      return fiboRecursive(n - 1) + fiboRecursive(n - 2);
    }

    const memoization = new Map<number, number>();
    function fiboDp(n: number): number {
      if (n <= 2) {
        return 1;
      }

      const cached = memoization.get(n);
      if (cached) {
        return cached;
      }

      const result = fiboDp(n - 1) + fiboDp(n - 2);
      memoization.set(n, result);
      return result;
    }

    it('solution - recursive', () => {
      const result = fiboRecursive(10);
      console.log(result);
    });

    it('solution - dp', () => {
      const result = fiboDp(100);
      console.log(result);
    });
  });
});
