describe('robot-vaccume.spec.ts', () => {
  const DIRECTION_MODIFIER: Record<number, [number, number]> = {
    0: [-1, 0], // 북
    1: [0, -1], // 서
    2: [1, 0], // 남
    3: [0, 1], // 동
  };

  function robotVaccume(
    map: number[][],
    row: number,
    column: number,
    direction: number,
  ): number {
    let count = 1;
    map[row][column] = 2;
    let r = row,
      c = column,
      d = direction;

    while (true) {
      let cleaned = false;

      // 4방향 확인
      for (let i = 0; i < 4; i++) {
        d = (d + 1) % 4; // 왼쪽으로 회전 (반시계방향)
        const [dr, dc] = DIRECTION_MODIFIER[d];
        const newR = r + dr;
        const newC = c + dc;

        // 청소하지 않은 공간이 있으면 전진
        if (map[newR][newC] === 0) {
          count += 1;
          map[newR][newC] = 2;
          r = newR;
          c = newC;
          cleaned = true;
          break;
        }
      }

      // 청소할 곳이 없으면 후진
      if (!cleaned) {
        const backDirection = (d + 2) % 4; // 현재 방향의 반대
        const [backDr, backDc] = DIRECTION_MODIFIER[backDirection];
        const backR = r + backDr;
        const backC = c + backDc;

        // 후진할 수 없으면 종료
        if (map[backR][backC] === 1) {
          break;
        }

        // 후진
        r = backR;
        c = backC;
      }
    }

    return count;
  }

  it('solution', () => {
    const result = robotVaccume(
      [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
        [1, 0, 0, 1, 1, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      ],
      7,
      4,
      0,
    );
    // const result = minimumSupplies(4, [4, 10, 15, 20], [20, 5, 10, 5], 40);
    // const result = minimumSupplies(2, [1, 10], [10, 100], 11);
    console.log(result);
  });
});
