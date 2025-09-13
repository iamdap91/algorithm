describe('merge-and-sort-intervals.spec.ts', () => {
  function mergeHighDefinitionIntervals(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < intervals.length; i++) {
      const [start1, end1] = intervals[i - 1];
      const [start2, end2] = intervals[i];

      if (end1 >= start2) {
        intervals[i] = [start1, Math.max(end2, end1)];
        intervals[i - 1] = [-1, -1];
      }
    }

    return intervals.filter(([start]) => start !== -1);
  }

  it('solution', () => {
    const result = mergeHighDefinitionIntervals([
      [1, 3],
      [1, 4],
      [1, 5],
      [2, 6],
      [8, 11],
      [8, 10],
      [15, 18],
    ]);
    console.log(result);
  });
});
