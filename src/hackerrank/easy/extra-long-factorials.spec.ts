describe('extra-long-factorials', () => {
  function extraLongFactorials(n: number): void {
    let result = BigInt(1);

    for (let i = 2; i <= n; i++) {
      result *= BigInt(i);
    }

    console.log(result.toString());
  }

  it('extra-long-factorials.spec.ts', () => {
    extraLongFactorials(25);
  });
});
