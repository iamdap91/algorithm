describe('stock-price.spec.ts', () => {
  function stockPrice(prices: number[]) {
    const results = [];
    for (let i = 0; i < prices.length; i++) {
      const target = prices[i];
      let period = 0;
      for (let j = i + 1; j < prices.length; j++) {
        const current = prices[j];
        if (current >= target) {
          period++;
        }
      }
      results.push(period);
    }

    return results;
  }

  it('solution', () => {
    const result = stockPrice([1, 2, 3, 2, 3]);
    console.log(result);
  });
});
