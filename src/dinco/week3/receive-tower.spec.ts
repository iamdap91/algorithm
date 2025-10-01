describe('receive-tower.spec.ts', () => {
  // function receiveTowers(towerHeights: number[]): number[] {
  //   const result = new Array(towerHeights.length).fill(0);
  //   for (let i = 1; i < towerHeights.length; i++) {
  //     const current = towerHeights[i];
  //     for (let j = i - 1; j >= 0; j--) {
  //       const prev = towerHeights[j];
  //       if (prev >= current) {
  //         result[i] = j + 1;
  //         break;
  //       }
  //     }
  //   }
  //   return result;
  // }

  // function receiveTowers(towerHeights: number[]): number[] {
  //   const result = new Array(towerHeights.length).fill(0);
  //
  //   while (towerHeights.length > 0) {
  //     const targetIndex = towerHeights.length - 1;
  //     const targetHeight = towerHeights.pop();
  //     for (let i = targetHeight - 1; i >= 0; i--) {
  //       const currentHeight = towerHeights[i];
  //       if (currentHeight >= targetHeight) {
  //         result[targetIndex] = i + 1;
  //         break;
  //       }
  //     }
  //   }
  //
  //   return result;
  // }

  function receiveTowers(heights: number[]): number[] {
    const stack: [number, number][] = []; // [인덱스, 높이]를 저장
    const result: number[] = new Array(heights.length).fill(0);

    // O(n)
    for (let i = 0; i < heights.length; i++) {
      while (stack.length > 0 && stack[stack.length - 1][1] <= heights[i]) {
        stack.pop();
      }
      if (stack.length > 0) {
        result[i] = stack[stack.length - 1][0] + 1;
      }
      stack.push([i, heights[i]]);
    }

    return result;
  }

  it('solution', () => {
    const result = receiveTowers([6, 9, 5, 7, 4]);
    console.log(result);
  });
});
