describe('프렌즈4블록.spec.ts', () => {
  function figureBlocksToRemove(matrix: string[][]): [number, number][] {
    const set = new Set<string>();

    for (let i = 0; i < matrix.length - 1; i++) {
      for (let j = 0; j < matrix[0].length - 1; j++) {
        const current = matrix[i][j];
        if (current === '') continue;

        // 2x2 블록 체크
        if (
          current === matrix[i][j + 1] &&
          current === matrix[i + 1][j] &&
          current === matrix[i + 1][j + 1]
        ) {
          set.add(`${i}:${j}`);
          set.add(`${i}:${j + 1}`);
          set.add(`${i + 1}:${j}`);
          set.add(`${i + 1}:${j + 1}`);
        }
      }
    }

    return [...set].map((item) => item.split(':').map((item) => +item)) as [
      number,
      number,
    ][];
  }

  function removeBlocks(
    matrix: string[][],
    blocks: [number, number][],
  ): number {
    for (const [x, y] of blocks) {
      matrix[x][y] = '';
    }

    return blocks.length;
  }

  function organize(matrix: string[][]) {
    for (let col = 0; col < matrix[0].length; col++) {
      // 각 열에서 빈 문자열이 아닌 값들을 수집
      const validValues: string[] = [];
      for (let row = 0; row < matrix.length; row++) {
        if (matrix[row][col] !== '') {
          validValues.push(matrix[row][col]);
        }
      }

      // 열을 모두 빈 문자열로 초기화
      for (let row = 0; row < matrix.length; row++) {
        matrix[row][col] = '';
      }

      // 아래쪽부터 유효한 값들을 채워넣기
      for (let i = 0; i < validValues.length; i++) {
        matrix[matrix.length - validValues.length + i][col] = validValues[i];
      }
    }
  }

  function solution(m: number, n: number, board: string[]): number {
    const matrix: string[][] = board.map((row) => row.split(''));

    let count = 0;
    let blocks: [number, number][] = [];

    do {
      blocks = figureBlocksToRemove(matrix);
      count += removeBlocks(matrix, blocks);
      organize(matrix);
    } while (blocks.length > 0);

    return count;
  }

  it('solution', () => {
    const result = solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF']);
    console.log(result);
  });
});
