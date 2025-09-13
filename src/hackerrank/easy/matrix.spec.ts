describe('matrix', () => {
  function rotateMatrixClockwise(matrix: number[][]) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
      return [];
    }

    const rows = matrix.length;
    const cols = matrix[0].length;

    // 1. (Reverse each row)
    const reversedRowsMatrix = matrix.map((row) => [...row].reverse());

    // 2. (Transpose)
    const rotatedMatrix = Array.from({ length: cols }, () => Array(rows).fill(0));

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        rotatedMatrix[j][i] = reversedRowsMatrix[i][j];
      }
    }

    return rotatedMatrix;
  }

  function formingMagicSquare(matrix: number[][]) {
    const magicSquares = [
      [
        [4, 9, 2],
        [3, 5, 7],
        [8, 1, 6],
      ],
    ];

    for (let i = 0; i < 3; i++) {
      const rotated = rotateMatrixClockwise(magicSquares[i]);
      magicSquares.push(rotated);
    }

    for (let i = 0; i < 4; i++) {
      const [row1, row2, row3] = magicSquares[i];
      magicSquares.push([
        [...row1].reverse(),
        [...row2].reverse(),
        [...row3].reverse(),
      ]);
    }

    let min = Number.MAX_SAFE_INTEGER;
    for (const magicSquare of magicSquares) {
      let count = 0;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          count += Math.abs(matrix[i][j] - magicSquare[i][j]);
        }
      }

      if (count < min) {
        min = count;
      }
    }

    return min;
  }

  it('matrix', () => {
    // const matrix = [
    //   [
    //     [4, 9, 2],
    //     [3, 5, 7],
    //     [8, 1, 5],
    //   ],
    // ];
    // const matrix = [
    //   [4, 8, 2],
    //   [4, 5, 7],
    //   [6, 1, 6],
    // ];

    const matrix = [
      [4, 5, 8],
      [2, 4, 1],
      [1, 9, 7],
    ];

    const result = formingMagicSquare(matrix);
    console.log(result);
  });
});
