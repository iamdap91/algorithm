describe('count-elements-greater-than-previous-avg.spec.ts', () => {
  function countResponseTimeRegressions(responseTimes: number[]): number {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < responseTimes.length; i++) {
      sum += responseTimes[i];
      if (i === 0) {
        continue;
      }

      if (responseTimes[i] > sum / (i + 1)) {
        count++;
      }
    }

    return count;
  }

  it('solution', () => {
    const result = countResponseTimeRegressions([100, 200, 150, 300]);
    console.log(result);
  });
});
