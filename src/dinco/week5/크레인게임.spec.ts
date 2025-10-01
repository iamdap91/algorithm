describe('카카오추카코테.spec.ts', () => {
  function pickTop(board: number[][], move: number): number | null {
    for (let i = 0; i < board.length; i++) {
      if (board[i][move] !== 0) {
        const top = board[i][move];
        board[i][move] = 0;
        return top;
      }
    }

    return null;
  }

  function solution(board: number[][], originalMoves: number[]): number {
    const moves = originalMoves.map((move) => move - 1);
    const stack: number[] = [];
    let count = 0;
    for (const move of moves) {
      const topItem = pickTop(board, move);
      if (topItem === null) {
        continue;
      }

      if (stack[stack.length - 1] === topItem) {
        stack.pop();
        count += 2;
      } else {
        stack.push(topItem);
      }
    }

    return count;
  }

  it('solution', () => {
    const board = [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ];
    const moves = [1, 5, 3, 5, 1, 2, 1, 4];

    const result = solution(board, moves);
    console.log(result);
  });
});
