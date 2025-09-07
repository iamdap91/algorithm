// const getCombinations = <T>(array: T[], r: number): T[][] => {
//   const result: T[][] = [];
//
//   function backtrack(start: number, currentCombination: T[]) {
//     // 조합이 완성되면 결과에 추가
//     if (currentCombination.length === r) {
//       result.push([...currentCombination]);
//       return;
//     }
//
//     // start부터 배열 끝까지 반복
//     for (let i = start; i < array.length; i++) {
//       currentCombination.push(array[i]);
//       backtrack(i + 1, currentCombination);
//       currentCombination.pop(); // 백트래킹
//     }
//   }
//
//   backtrack(0, []);
//   return result;
// };

function getCombinationsRecursive<T>(array: T[], r: number): T[][] {
  if (r === 0) return [[]];
  if (array.length === 0) return [];

  const [first, ...rest] = array;

  // first를 포함하는 조합들
  const withFirst = getCombinationsRecursive(rest, r - 1).map((combo) => [
    first,
    ...combo,
  ]);

  // first를 포함하지 않는 조합들
  const withoutFirst = getCombinationsRecursive(rest, r);

  return [...withFirst, ...withoutFirst];
}

it('combination', () => {
  const result = getCombinationsRecursive([1, 2, 3, 4], 2);
  console.log(result);
});
