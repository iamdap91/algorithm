describe('theatre.spec.ts', () => {
  function getFibonacci(n: number) {
    const memoization = new Map<number, number>();
    function fibo(n: number): number {
      if (n === 2) {
        return 2;
      }
      if (n < 2) {
        return 1;
      }

      const cached = memoization.get(n);
      if (cached) {
        return cached;
      }

      const result = fibo(n - 1) + fibo(n - 2);
      memoization.set(n, result);
      return result;
    }

    return fibo(n);
  }

  function theatreSeat(seatCount: number, vipSeats: number[]): number {
    const counts = [];
    let start = 0;
    for (const vip of vipSeats) {
      counts.push(vip - start - 1);
      start = vip;
    }
    counts.push(seatCount - start);

    let result = 1;
    for (const count of counts) {
      const fibo = getFibonacci(count);
      result *= fibo;
    }

    return result;
  }

  it('solution', () => {
    const result = theatreSeat(9, [4, 7]);
    console.log(result);
  });
});
