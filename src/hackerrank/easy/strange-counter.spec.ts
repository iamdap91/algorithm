describe('strange-counter.spec.ts', () => {
  function strangeCounter(sequence: number): number {
    let multiplier = 0;
    let remaining = sequence;

    // 해당 sequence가 속한 사이클 찾기
    while (true) {
      const cycleLength = 3 * Math.pow(2, multiplier);
      if (remaining <= cycleLength) {
        break;
      }
      remaining -= cycleLength;
      multiplier++;
    }

    // 현재 사이클의 길이에서 남은 위치를 빼서 값 계산
    const cycleLength = 3 * Math.pow(2, multiplier);
    return cycleLength - remaining + 1;
  }

  it('solution', () => {
    const result = strangeCounter(15);
    console.log(result);
  });
});
