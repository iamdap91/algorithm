describe('plus-minus.spec.ts', () => {
  function solution(array: number[], target: number) {
    const results = [];
    function recurse(array: number[], index: number, currentSum: number) {
      if (index === array.length) {
        results.push(currentSum);
        return;
      }

      recurse(array, index + 1, currentSum + array[index]);
      recurse(array, index + 1, currentSum - array[index]);
    }

    recurse(array, 0, 0);

    let count = 0;
    for (const result of results) {
      if (result === target) {
        count++;
      }
    }

    return count;
  }

  it('solution', () => {
    const result = solution([1, 1, 1, 1, 1], 3);
    console.log(result);
  });
});
