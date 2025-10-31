describe('absolute-permutation.spec.ts', () => {
  function getPermutations<T>(arr: T[]): T[][] {
    const result: T[][] = [];

    function permute(currentPermutation: T[], remainingElements: T[]) {
      if (remainingElements.length === 0) {
        result.push(currentPermutation);
        return;
      }

      for (let i = 0; i < remainingElements.length; i++) {
        const nextElement = remainingElements[i];
        const newRemainingElements = [
          ...remainingElements.slice(0, i),
          ...remainingElements.slice(i + 1),
        ];

        permute([...currentPermutation, nextElement], newRemainingElements);
      }
    }

    permute([], arr);
    return result;
  }

  function absolutePermutation(n: number, k: number): number[] {
    const arr = Array.from({ length: n }, (_, i) => i + 1);
    const permutations = getPermutations(arr);

    for (const array of permutations) {
      const result = figureIsAbsolutePermutation(array, k);
      if (result) {
        return array;
      }
    }

    return [-1];
  }

  function figureIsAbsolutePermutation(array: number[], k: number): boolean {
    for (let i = 0; i < array.length; i++) {
      const position = i + 1;
      const value = array[i];

      if (Math.abs(position - value) !== k) {
        return false;
      }
    }

    return true;
  }

  it('solution', () => {
    const result = absolutePermutation(4, 2);
    console.log(result);
  });
});
