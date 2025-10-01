describe('삼성역량테스트2.spec.ts', () => {
  function solution(gameMap: string[][]): boolean {
    let redRow = 0,
      redCol = 0;
    let blueRow = 0,
      blueCol = 0;

    for (let i = 0; i < gameMap.length; i++) {
      for (let j = 0; j < gameMap[0].length; j++) {
        if (gameMap[i][j] === 'R') {
          redRow = i;
          redCol = j;
        } else if (gameMap[i][j] === 'B') {
          blueRow = i;
          blueCol = j;
        }
      }
    }

    const queue: [number, number, number, number, number][] = [];
    const visited = new Set<string>();

    queue.push([redRow, redCol, blueRow, blueCol, 0]);
    visited.add(`${redRow},${redCol},${blueRow},${blueCol}`);

    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];

    while (queue.length > 0) {
      const [crr, crc, cbr, cbc, count] = queue.shift()!;

      if (count >= 10) {
        continue;
      }

      for (let i = 0; i < 4; i++) {
        let [nrr, nrc, rMoveCount] = move(crr, crc, dr[i], dc[i]);
        let [nbr, nbc, bMoveCount] = move(cbr, cbc, dr[i], dc[i]);

        if (gameMap[nbr][nbc] === 'O') {
          continue;
        }

        if (gameMap[nrr][nrc] === 'O') {
          // console.log(count + 1);
          return true;
        }

        if (nrr === nbr && nrc === nbc) {
          if (rMoveCount > bMoveCount) {
            nrr -= dr[i];
            nrc -= dc[i];
          } else {
            nbr -= dr[i];
            nbc -= dc[i];
          }
        }

        const key = `${nrr},${nrc},${nbr},${nbc}`;
        if (!visited.has(key)) {
          visited.add(key);
          queue.push([nrr, nrc, nbr, nbc, count + 1]);
        }
      }
    }

    return false;

    function move(
      r: number,
      c: number,
      dy: number,
      dx: number,
    ): [number, number, number] {
      let moveCount = 0;
      while (gameMap[r + dy][c + dx] !== '#' && gameMap[r][c] !== 'O') {
        r += dy;
        c += dx;
        moveCount++;
      }
      return [r, c, moveCount];
    }
  }

  it('solution', () => {
    const game_map = [
      ['#', '#', '#', '#', '#', '#', '#'],
      ['#', '.', '.', 'R', '#', 'B', '#'],
      ['#', '.', '#', '#', '#', '#', '#'],
      ['#', '.', '.', '.', '.', '.', '#'],
      ['#', '#', '#', '#', '#', '.', '#'],
      ['#', 'O', '.', '.', '.', '.', '#'],
      ['#', '#', '#', '#', '#', '#', '#'],
    ];

    const result = solution(game_map);
    console.log(result);
  });
});
