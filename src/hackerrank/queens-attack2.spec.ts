function queensAttack(
  boardSize: number,
  numberOfObstacles: number,
  q_row: number,
  q_column: number,
  obstacles: number[][],
): number {
  const obstacleSet = new Set<string>();
  for (const [row, column] of obstacles) {
    obstacleSet.add(`${boardSize - row}:${column - 1}`);
  }

  // clockwise from top left
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
  ];

  let availableSpace = 0;
  for (const [row, column] of directions) {
    let current = {
      row: boardSize - q_row + row,
      column: q_column - 1 + column,
    };

    while (
      0 <= current.row &&
      current.row < boardSize &&
      0 <= current.column &&
      current.column < boardSize
    ) {
      if (obstacleSet.has(`${current.row}:${current.column}`)) {
        break;
      }

      availableSpace += 1;
      current = {
        row: current.row + row,
        column: current.column + column,
      };
    }
  }

  return availableSpace;
}

// function queensAttack(
//   boardSize: number,
//   numberOfObstacles: number,
//   q_row: number,
//   q_column: number,
//   obstacles: number[][],
// ): number {
//   const board: number[][] = new Array(boardSize)
//     .fill(1)
//     .map(() => new Array(boardSize).fill(1));
//
//   for (const [row, column] of obstacles) {
//     board[boardSize - row][column - 1] = 0;
//   }
//
//   // clockwise from top left
//   const directions = [
//     // 좌상
//     [-1, -1],
//     // 상
//     [-1, 0],
//     // 우상
//     [-1, 1],
//     // 우
//     [0, 1],
//     // 우하
//     [1, 1],
//     // 하
//     [1, 0],
//     // 좌하
//     [1, -1],
//     // 좌
//     [0, -1],
//   ];
//
//   let availables = 0;
//   for (const [row, column] of directions) {
//     let current = [boardSize - q_row + row, q_column - 1 + column];
//     let space = board?.[current[0]]?.[current[1]];
//
//     while (space) {
//       console.log(current);
//       availables += 1;
//
//       current = [current[0] + row, current[1] + column];
//       space = board?.[current[0]]?.[current[1]];
//     }
//   }
//
//   return availables;
// }

it('queens-attack2.spec.ts', () => {
  // const result = queensAttack(3, 3, 0, 0, [[1, 1]]);
  const result = queensAttack(5, 3, 4, 3, [
    [5, 5],
    [4, 2],
    [2, 3],
  ]);
  console.log(result);
});
