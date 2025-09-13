describe('non-divisible-subsets', () => {
  function nonDivisibleSubset(divisor: number, nums: number[]): number {
    const remainders = new Array(divisor).fill(0);
    for (const num of nums) {
      remainders[num % divisor]++;
    }

    let count = 0;

    if (divisor % 2 === 0) {
      if (remainders[divisor / 2] > 0) {
        count++;
      }
    }

    if (remainders[0] > 0) {
      count++;
    }

    for (let i = 1; i < divisor / 2; i++) {
      count += Math.max(remainders[i], remainders[divisor - i]);
    }

    return count;
  }

  it('non-divisible-subsets', () => {
    const result = nonDivisibleSubset(3, [1, 2, 3, 4, 5]); // 1,3,4
    console.log(result);
  });
});
