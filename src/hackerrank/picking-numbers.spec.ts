function pickingNumbers(nums: number[]): number {
  const map = new Map();
  for (const num of nums) {
    const prev = map.get(num) || 0;
    map.set(num, prev + 1);
  }

  let max = 0;
  const keys = Array.from(map.keys()).sort((a, b) => a - b);
  for (const key of keys) {
    const smaller = map.get(key - 1) || 0;
    const match = map.get(key) || 0;
    const bigger = map.get(key + 1) || 0;

    const current =
      smaller + match > bigger + match ? smaller + match : bigger + match;
    if (current > max) {
      max = current;
    }
  }

  return max;
}

// function pickingNumbers(nums: number[]): number {
//   const results: number[][] = [];
//   for (let i = 0; i < nums.length; i++) {
//     const guideNumber = nums[i];
//     const result: number[] = [guideNumber];
//
//     for (let j = i + 1; j < nums.length; j++) {
//       const current = nums[j];
//       if (Math.abs(current - guideNumber) < 2) {
//         result.push(current);
//       }
//       // if (Math.abs(current - result?.[result.length - 1]) < 2) {
//       //   result.push(current);
//       // }
//     }
//     results.push(result);
//   }
//   let max = 0;
//   for (const result of results) {
//     if (result.length > max) {
//       max = result.length;
//     }
//   }
//
//   return max;
// }

it('picking-numbers', () => {
  // const result = pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5]);
  const result = pickingNumbers([4, 6, 5, 3, 3, 1]);
  console.log(result);
});
