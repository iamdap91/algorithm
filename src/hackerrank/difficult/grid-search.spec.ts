describe('grid-search.spec.ts', () => {
  function figureIsIncluding(
    searchGrid: string[][],
    patterns: string[][],
    position: [number, number],
  ): boolean {
    const rowModifier = position[0];
    const colModifier = position[1];

    for (let i = 0; i < patterns.length; i++) {
      for (let j = 0; j < patterns[i].length; j++) {
        const [r, c] = [i + rowModifier, j + colModifier];
        if (patterns[i][j] !== searchGrid?.[r]?.[c]) {
          return false;
        }
      }
    }
    return true;
  }

  function gridSearch(s: string[], p: string[]): string {
    const searchGrid = s.map((row) => row.split(''));
    const patterns = p.map((row) => row.split(''));
    const startPattern = patterns[0][0];

    for (let i = 0; i < searchGrid.length; i++) {
      for (let j = 0; j < searchGrid[i].length; j++) {
        const current = searchGrid[i][j];
        if (startPattern === current) {
          const isIncluding = figureIsIncluding(searchGrid, patterns, [i, j]);
          if (isIncluding) {
            return 'YES';
          }
        }
      }
    }

    return 'NO';
  }

  it('solution', () => {
    const result = gridSearch(
      [
        '7283455864',
        '6731158619',
        '8988242643',
        '3830589324',
        '2229505813',
        '5633845374',
        '6473530293',
        '7053106601',
        '0834282956',
        '4607924137',
      ],
      ['9505', '3845', '3530'],
    );
    console.log(result);
  });
});
