describe('추석트래픽.spec.ts', () => {
  function solution(lines: string[]) {
    const logs = lines.map((line) => {
      const [d, t, duration] = line.split(' ');
      const end = new Date(`${d} ${t}`).getTime();
      const start = end - (parseFloat(duration.replace('s', '')) * 1000 - 1);

      return { start, end };
    });

    let maxCount = 0;
    for (const log of logs) {
      const checkPoints = [log.start, log.end];

      for (const point of checkPoints) {
        const intervalEnd = point + 999;
        let count = 0;

        for (const logToCheck of logs) {
          if (logToCheck.start <= intervalEnd && logToCheck.end >= point) {
            count++;
          }
        }

        maxCount = Math.max(maxCount, count);
      }
    }

    return maxCount;
  }

  it('solution', () => {
    const result = solution([
      '2016-09-15 01:00:04.002 2.0s',
      '2016-09-15 01:00:07.000 2s',
    ]);
    console.log(result);
    expect(result).toBe(1);
  });
});
