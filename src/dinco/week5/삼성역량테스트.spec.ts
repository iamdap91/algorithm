describe('삼성역량테스트.spec.ts', () => {
  const dr = [0, 0, -1, 1];
  const dc = [1, -1, 0, 0];

  function popUntilTarget(stack: number[], target: number): number[] {
    const targets = [];
    let current = null;
    while (stack.length > 0 && current !== target) {
      current = stack.pop();
      targets.push(current);
    }

    return targets.reverse();
  }

  function solution(
    chessMap: number[][],
    locationAndDirections: number[][],
  ): number {
    const pieces: { r: number; c: number; d: number }[] = [];
    const positionMap = Array.from({ length: chessMap.length }, () =>
      Array.from({ length: chessMap[0].length }, () => [] as number[]),
    );
    for (let i = 0; i < locationAndDirections.length; i++) {
      const [r, c, d] = locationAndDirections[i];
      positionMap[r][c].push(i);
      pieces.push({ r, c, d });
    }

    let round = 1;
    while (round <= 1000) {
      // 말 갯수만큼 루프
      for (let i = 0; i < pieces.length; i++) {
        const { r, c, d } = pieces[i];
        let newR = r + dr[d];
        let newC = c + dc[d];

        // 3) 파란색인 경우에는 1번 말의 이동 방향을 반대로 하고 한 칸 이동한다. 방향을 반대로 바꾼 후에 이동하려는 칸이 파란색인 경우에는 이동하지 않고 가만히 있는다.
        // 4) 체스판을 벗어나는 경우에는 파란색과 같은 경우이다.
        if (
          chessMap?.[newR]?.[newC] === undefined ||
          chessMap[newR][newC] === 2
        ) {
          const reversedDirection = d % 2 === 0 ? d + 1 : d - 1;
          newR = r + dr[reversedDirection];
          newC = c + dc[reversedDirection];
          pieces[i].d = reversedDirection;

          if (
            chessMap?.[newR]?.[newC] === undefined ||
            chessMap[newR][newC] === 2
          ) {
            continue;
          }
        }

        const targets = popUntilTarget(positionMap[r][c], i);
        // 2) 빨간색인 경우에는 이동한 후에 1번 말과 그 위에 있는 모든 말의 쌓여있는 순서를 반대로 바꾼다.
        // - 1, 2, 3 가 이동하고, 이동하려는 칸에 말이 없는 경우에는 3, 2, 1가 된다.
        // - 1, 4, 6, 7가 이동하고, 이동하려는 칸에 말이 5, 3, 2로 있는 경우에는 5, 3, 2, 7, 6, 4, 1가 된다.
        if (chessMap[newR][newC] === 1) {
          targets.reverse();
        }

        // 1. 1번 말이 이동하려는 칸이
        // 1) 흰색인 경우에는 그 칸으로 이동한다. 이동하려는 칸에 말이 이미 있는 경우에는 가장 위에 1번 말을 올려놓는다.
        // - 1번 말의 위에 다른 말이 있는 경우에는 1번 말과 위에 있는 모든 말이 이동한다.
        // - 예를 들어, 1, 2, 3로 쌓여있고, 이동하려는 칸에 4, 5가 있는 경우에는 1번 말이 이동한 후에는 4, 5, 1, 2, 3가 된다.
        for (const target of targets) {
          pieces[target].r = newR;
          pieces[target].c = newC;
        }
        positionMap[newR][newC].push(...targets);

        if (positionMap[newR][newC].length >= locationAndDirections.length) {
          return round;
        }
      }
      round++;
    }

    return -1;
  }

  it('solution', () => {
    const chessMap = [
      // 1은 빨강, 2는 파랑
      [0, 0, 2, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 2],
      [0, 2, 0, 0],
    ];
    const locationAndDirections = [
      [1, 0, 0],
      [2, 1, 2],
      [1, 1, 0],
      [3, 0, 1],
    ];

    const result = solution(chessMap, locationAndDirections);
    console.log(result);
  });

  it('solution2', () => {
    const chessMap = [
      // 1은 빨강, 2는 파랑
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    const locationAndDirections = [
      [0, 1, 0],
      [1, 1, 0],
      [0, 2, 0],
      [2, 2, 2],
    ];
    // const locationAndDirections = [
    //   [0, 1, 0],
    //   [0, 1, 1],
    //   [0, 1, 0],
    //   [2, 1, 2],
    // ];

    const result = solution(chessMap, locationAndDirections);
    console.log(result);
  });
});
