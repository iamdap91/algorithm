describe('sequence-equation', () => {
  function permutationEquation(nums: number[]): number[] {
    // 1 base index
    const valToIndexMap = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
      valToIndexMap.set(nums[i], i + 1);
    }

    const result: number[] = [];
    for (let x = 1; x <= nums.length; x++) {
      // find 1 base index p(A) = x
      const A = valToIndexMap.get(x)!;

      // find 2 base index p(y) = A
      const y = valToIndexMap.get(A)!;
      result.push(y);
    }
    return result;
  }

  it('sequence-equation.spec.ts', () => {
    const result = permutationEquation([2, 3, 1]); // [2, 3, 1]
    console.log(result);
  });
});
