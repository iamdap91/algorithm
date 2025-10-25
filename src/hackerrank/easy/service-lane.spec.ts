describe('service-lane.spec.ts', () => {
  function serviceLane(
    n: number,
    width: number[],
    cases: number[][],
  ): number[] {
    const result = [];
    for (const [start, end] of cases) {
      const segment = width.slice(start, end + 1);
      result.push(Math.min(...segment));
    }

    return result;
  }

  it('solution', () => {
    const result = serviceLane(
      4,
      [2, 3, 2, 1],
      [
        [1, 2],
        [2, 4],
      ],
    );
    console.log(result);
  });
});
