describe('3d-surface-area.spec.ts', () => {
  // function surfaceArea(A: number[][]): number {
  //   // top down
  //   let td = 0;
  //   for (let i = 0; i < A.length; i++) {
  //     for (let j = 0; j < A[i].length; j++) {
  //       const current = A[i][j];
  //       if (current) {
  //         td += 2;
  //       }
  //     }
  //   }
  //
  //   // left right
  //   let lr = 0;
  //   for (let i = 0; i < A.length; i++) {
  //     lr += A[i][0];
  //     for (let j = 1; j < A[i].length; j++) {
  //       lr += Math.max(A[i][j] - A[i]?.[j - 1], 0);
  //     }
  //     lr += Math.max(...A[i]);
  //   }
  //
  //   // front back
  //   let fb = 0;
  //   for (let j = 0; j < A[0].length; j++) {
  //     const cols = [];
  //     for (let i = 0; i < A.length; i++) {
  //       const current = A[i][j];
  //       const prev = A?.[i - 1]?.[j] || 0;
  //       cols.push(current);
  //       fb += Math.max(current - prev, 0);
  //       console.log(current, prev);
  //     }
  //     fb += Math.max(...cols);
  //   }
  //
  //   return lr + td + fb;
  // }

  function surfaceArea(A: number[][]): number {
    let surface = 0;
    const H = A.length;
    const W = A[0].length;

    for (let i = 0; i < H; i++) {
      for (let j = 0; j < W; j++) {
        const current = A[i][j];

        if (current > 0) {
          // 위아래 면 (항상 1씩)
          surface += 2;

          // 4방향 면적 계산
          surface += Math.max(0, current - (A[i - 1]?.[j] ?? 0)); // 앞
          surface += Math.max(0, current - (A[i + 1]?.[j] ?? 0)); // 뒤
          surface += Math.max(0, current - (A[i][j - 1] ?? 0)); // 왼쪽
          surface += Math.max(0, current - (A[i][j + 1] ?? 0)); // 오른쪽
        }
      }
    }

    return surface;
  }

  it('solution', () => {
    const result = surfaceArea([
      [1, 3, 4],
      [2, 2, 3],
      [1, 2, 4],
    ]);
    console.log(result);
  });
});
