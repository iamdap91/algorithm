describe('strange-counter.spec.ts', () => {
  function strangeCounter(sequence: number): number {
    let multiplier = 0;
    while (true) {
      const current = 3 * Math.pow(2, multiplier);
      if (sequence < current) {
        break;
      }
      multiplier++;
      sequence -= current;
    }

    return sequence;
  }

  it('solution', () => {
    const result = strangeCounter(15);
    console.log(result);
  });
});
