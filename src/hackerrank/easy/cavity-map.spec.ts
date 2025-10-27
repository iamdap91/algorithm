describe('cavity-map.spec.ts', () => {
  function cavityMap(grid: string[]): string[] {
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];

    const result: string[] = [];

    for (let i = 0; i < grid.length; i++) {
      const cells = grid[i].split('');

      for (let j = 0; j < cells.length; j++) {
        const currentCell = cells[j];
        let isCavity = true;
        for (let k = 0; k < 4; k++) {
          const newRow = i + dr[k];
          const newCol = j + dc[k];
          if (
            !grid?.[newRow]?.[newCol] ||
            grid?.[newRow]?.[newCol] >= currentCell
          ) {
            isCavity = false;
            break;
          }
        }

        if (isCavity) {
          cells[j] = 'X';
        }
      }
      result.push(cells.join(''));
    }

    return result;
  }

  it('solution', () => {
    const result = cavityMap(['1112', '1912', '1892', '1234']);
    console.log(result);
  });
});
