describe('template', () => {
  function happyLadybugs(b: string): string {
    const freq = new Map<string, number>();
    let blanks = 0;
    for (const char of b) {
      if (char === '_') {
        blanks += 1;
        continue;
      }

      const prev = freq.get(char) || 0;
      freq.set(char, prev + 1);
    }

    if (blanks === 0) {
      // No movement possible; must already be happy
      // Check each position is part of a group of >=2
      for (let i = 0; i < b.length; i++) {
        const leftSame = i > 0 && b[i] === b[i - 1];
        const rightSame = i < b.length - 1 && b[i] === b[i + 1];
        if (!(leftSame || rightSame)) {
          return 'NO';
        }
      }
      return 'YES';
    } else {
      // We can rearrange; if any color count is 1, that color can never be happy
      for (const count of freq.values()) {
        if (count === 1) {
          return 'NO';
        }
      }
      return 'YES';
    }
  }

  it('solution', () => {
    const result = happyLadybugs('B_RRBR');
    console.log(result);
  });
});
