// function climbingLeaderboard(
//   ranked: number[],
//   playerScores: number[],
// ): number[] {
//   const result: number[] = [];
//
//   const scoreSet = new Set(ranked);
//   for (const scoreInRound of playerScores) {
//     // 이진 탐색으로 순위 찾기
//     let left = 0;
//     let right = uniqueRanked.length;
//
//     while (left < right) {
//       const mid = Math.floor((left + right) / 2);
//       if (uniqueRanked[mid] <= score) {
//         right = mid;
//       } else {
//         left = mid + 1;
//       }
//     }
//
//     // 순위는 1부터 시작하므로 +1
//     result.push(left + 1);
//   }
//
//   return result;
// }

function climbingLeaderboard(ranked: number[], player: number[]): number[] {
  const uniqueRanked = [...new Set(ranked)].sort((a, b) => a - b);
  const result: number[] = [];

  for (const score of player) {
    let left = 0;
    let right = uniqueRanked.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (uniqueRanked[mid] <= score) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    // 순위는 1부터 시작하므로 +1
    result.push(left + 1);
  }

  return result;
}

describe('climbing-leaderboard', () => {
  it('climbing-leaderboard', () => {
    // const result = climbingLeaderboard([100, 90, 90, 80], [70, 80, 105]);
    const result = climbingLeaderboard(
      [100, 100, 50, 40, 50, 20, 10],
      [5, 25, 50, 120],
    );
    // const result = pickingNumbers([4, 6, 5, 3, 3, 1]);
    console.log(result);
  });
});
