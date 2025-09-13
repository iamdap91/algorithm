describe('beautiful-triplets.spec.ts', () => {
  function beautifulTriplets(d: number, arr: number[]): number {
    const map = new Map<number, number>();
    for (let i = 0; i < arr.length; i++) {
      map.set(arr[i], i);
    }

    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];

      const next = map.get(current + d);
      if (next > i) {
        const last = map.get(current + d * 2);
        if (last > next) {
          result.push(i);
        }
      }
    }

    return result.length;
  }

  it('solution', () => {
    const result = beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]);
    console.log(result);
  });
});
