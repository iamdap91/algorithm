describe('prime-number.spec.ts', () => {
  function figurePrimeUnderV1(num: number): number[] {
    const primes: number[] = [];
    for (let i = 2; i <= num; i++) {
      for (let j = 2; j <= i; j++) {
        if (i === j) {
          primes.push(i);
        }

        if (i % j === 0) break;
      }
    }

    return primes;
  }

  function figurePrimeUnderV2(num: number): number[] {
    const primes: number[] = [];
    for (let n = 2; n <= num; n++) {
      let isPrime = true;

      for (const i of primes) {
        if (i * i <= n && n % i === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        primes.push(n);
      }
    }

    return primes;
  }

  it('solution', () => {
    // const result = figurePrimeUnder(20);
    const result = figurePrimeUnderV2(20);
    console.log(result);
  });
});
