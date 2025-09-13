describe('minimum-distance.spec.ts', () => {
  function minimumDistances(arr: number[]): number {
    const map = new Map<number, number[]>();
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      const indexes = map.get(num) || [];
      indexes.push(i);
      map.set(num, indexes);
    }

    let minDistance = Number.MAX_SAFE_INTEGER;
    for (const indexes of Array.from(map.values())) {
      if (indexes.length < 2) {
        continue;
      }

      for (let i = 1; i < indexes.length; i++) {
        const prevIndex = indexes[i - 1];
        const currIndex = indexes[i];

        if (currIndex - prevIndex < minDistance) {
          minDistance = currIndex - prevIndex;
        }
      }
    }

    if (minDistance === Number.MAX_SAFE_INTEGER) {
      return -1;
    }

    return minDistance;
  }

  it('solution', () => {
    const result = minimumDistances([7, 1, 3, 4, 1, 7]);
    console.log(result);
  });
});
