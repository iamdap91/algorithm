describe('three', () => {
  function figureParkingArray(arr: number[][]): number[] {
    const array = Array(arr.length).fill(-1);

    array[0] = 0;
    for (let i = 0; i < arr.length; i++) {
      const [left, right] = arr[i];
      if (left > 0) {
        array[i * 2 + 1] = left;
      }
      if (right > 0) {
        array[i * 2 + 2] = right;
      }
    }

    return array;
  }

  function solution(parking: number[][]): number {
    const binaryTreeArray = figureParkingArray(parking);
    const parkingLot = binaryTreeArray.reduce((acc, item) => {
      if (item > 0) {
        return acc + 1;
      }
      return acc;
    }, 0);

    const possibleCases = (parkingLot * (parkingLot - 1)) / 2;
    const blockSet = new Set();
    for (let i = 0; i < binaryTreeArray.length; i++) {
      const current = binaryTreeArray[i];
      switch (true) {
        case i === 0:
        case current === -1:
        case current === 0:
          continue;
      }

      let currentIndex = i;
      while (currentIndex >= 0) {
        if (currentIndex === 0 || binaryTreeArray[currentIndex] === -1) {
          break;
        }

        const nextIndex = Math.floor((currentIndex - 1) / 2);
        if (nextIndex > 0) {
          blockSet.add(`${i}:${nextIndex}`);
          blockSet.add(`${nextIndex}:${i}`);
        }
        currentIndex = nextIndex;
      }
    }

    return possibleCases - blockSet.size / 2 < 0
      ? 0
      : possibleCases - blockSet.size / 2;
  }

  it('three', () => {
    const result = solution([
      [1, 2],
      [3, 4],
      [-1, -1],
      [-1, -1],
      [-1, -1],
    ]); // 4

    // const result = solution([
    //   [1, 2],
    //   [3, 4],
    //   [5, 6],
    //   [-1, 7],
    //   [8, 9],
    //   [-1, -1],
    //   [-1, -1],
    //   [-1, -1],
    //   [-1, -1],
    //   [-1, -1],
    // ]); //26

    // const result = solution([
    //   [1, -1],
    //   [-1, -1],
    //   [-1, -1],
    //   [2, -1],
    //   [-1, -1],
    //   [-1, -1],
    //   [-1, -1],
    //   [3, -1],
    //   [-1, -1],
    //   [-1, -1],
    //   [-1, -1],
    //   [-1, -1],
    // ]); // 4

    console.log(result);
  });
});
