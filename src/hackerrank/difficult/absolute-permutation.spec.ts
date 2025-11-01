describe('absolute-permutation.spec.ts', () => {
  // function getPermutations<T>(arr: T[]): T[][] {
  //   const result: T[][] = [];
  //
  //   function permute(currentPermutation: T[], remainingElements: T[]) {
  //     if (remainingElements.length === 0) {
  //       result.push(currentPermutation);
  //       return;
  //     }
  //
  //     for (let i = 0; i < remainingElements.length; i++) {
  //       const nextElement = remainingElements[i];
  //       const newRemainingElements = [
  //         ...remainingElements.slice(0, i),
  //         ...remainingElements.slice(i + 1),
  //       ];
  //
  //       permute([...currentPermutation, nextElement], newRemainingElements);
  //     }
  //   }
  //
  //   permute([], arr);
  //   return result;
  // }
  //
  // function absolutePermutation(n: number, k: number): number[] {
  //   const arr = Array.from({ length: n }, (_, i) => i + 1);
  //   const permutations = getPermutations(arr);
  //
  //   for (const array of permutations) {
  //     const result = figureIsAbsolutePermutation(array, k);
  //     if (result) {
  //       return array;
  //     }
  //   }
  //
  //   return [-1];
  // }
  //
  // function figureIsAbsolutePermutation(array: number[], k: number): boolean {
  //   for (let i = 0; i < array.length; i++) {
  //     const position = i + 1;
  //     const value = array[i];
  //
  //     if (Math.abs(position - value) !== k) {
  //       return false;
  //     }
  //   }
  //
  //   return true;
  // }

  function absolutePermutation(n: number, k: number): number[] {
    const result = [];
    const used = new Set<number>();

    for (let i = 1; i <= n; i++) {
      if (i - k >= 1 && !used.has(i - k)) {
        result.push(i - k);
        used.add(i - k);
      } else if (i + k <= n && !used.has(i + k)) {
        result.push(i + k);
        used.add(i + k);
      } else {
        return [-1];
      }
    }

    return result;
  }

  it('solution', () => {
    console.log('n=4, k=2:', absolutePermutation(4, 2)); // [3, 4, 1, 2]
    console.log('n=2, k=1:', absolutePermutation(2, 1)); // [2, 1]
    console.log('n=3, k=0:', absolutePermutation(3, 0)); // [1, 2, 3]
    console.log('n=3, k=2:', absolutePermutation(3, 2)); // [-1]
  });
});
