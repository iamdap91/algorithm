describe('permutations', () => {
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

  it('solution', () => {
    const result = getPermutations([1, 2, 3]);
    console.log(result);
  });
});
