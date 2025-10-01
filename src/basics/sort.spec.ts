describe('bubble', () => {
  function bubbleSort(array: number[]): number[] {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        const current = array[j];
        const next = array[j + 1];
        if (current > next) {
          array[j] = next;
          array[j + 1] = current;
        }
      }
    }

    return array;
  }

  it('solution', () => {
    const result = bubbleSort([3, 2, 1, 5, 4]);
    console.log(result);
  });
});

describe('selection', () => {
  function selectionSort(array: number[]): number[] {
    for (let i = 0; i < array.length; i++) {
      let minIndex = i;
      for (let j = i; j < array.length; j++) {
        const current = array[j];
        if (current < array[minIndex]) {
          minIndex = j;
        }
      }

      const temp = array[minIndex];
      array[minIndex] = array[i];
      array[i] = temp;
    }

    return array;
  }

  it('solution', () => {
    const result = selectionSort([2, 9, 4, 6, 1]);
    console.log(result);
  });
});

describe('insertion', () => {
  function insertionSort(array: number[]) {
    for (let i = 1; i < array.length; i++) {
      for (let j = 0; j < i; j++) {
        if (array[i - j] < array[i - j - 1]) {
          const temp = array[i - j];
          array[i - j] = array[i - j - 1];
          array[i - j - 1] = temp;
        } else {
          break;
        }
      }
    }

    return array;
  }
  it('solution', () => {
    const result = insertionSort([2, 9, 4, 6, 1]);
    console.log(result);
  });
});

describe('merge', () => {
  function merge(array1: number[], array2: number[]): number[] {
    // const result: number[] = [];
    // const left = [...array1];
    // const right = [...array2];
    //
    // while (left.length && right.length) {
    //   if (left[0] <= right[0]) {
    //     result.push(left.shift()!);
    //   } else {
    //     result.push(right.shift()!);
    //   }
    // }
    //
    // return [...result, ...left, ...right];

    const result: number[] = [];
    let i = 0;
    let j = 0;

    while (i < array1.length && j < array2.length) {
      if (array1[i] <= array2[j]) {
        result.push(array1[i]);
        i++;
      } else {
        result.push(array2[j]);
        j++;
      }
    }

    return [...result, ...array1.slice(i), ...array2.slice(j)];
  }

  function mergeSort(array: number[]) {
    if (array.length === 1) {
      return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    return merge(left, right);
  }

  it('solution', () => {
    const result = mergeSort([1, 2, 3, 5, 4, 6, 7, 8]);
    console.log(result);
  });
});
