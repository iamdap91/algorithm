describe('bigger-is-greater.spec.ts', () => {
  function biggerIsGreater(originalString: string): string {
    const chars = originalString.split('');

    // 현재 기준값
    for (let i = chars.length - 1; i >= 0; i--) {
      const current = chars[i];

      // 앞의 값들과 비교
      for (let j = i - 1; j >= 0; j--) {
        const prev = chars[j];
        if (current > prev) {
          chars[i] = prev;
          chars[j] = current;

          const beforeIndex = chars.slice(0, j + 1);
          const afterIndex = chars.slice(j + 1).sort();

          return beforeIndex.join('') + afterIndex.join('');
        }
      }
    }

    return 'no answer';
  }

  it('solution', () => {
    const result = biggerIsGreater('dmsym'); //
    console.log(result);
  });

  function nextPermutation<T>(array: T[]): T[] {
    // Find non-increasing suffix
    let i = array.length - 1;
    while (i > 0 && array[i - 1] >= array[i]) {
      i--;
    }
    if (i <= 0) {
      return array;
    }

    // Find successor to pivot
    let j = array.length - 1;
    while (array[j] <= array[i - 1]) {
      j--;
    }
    let temp = array[i - 1];
    array[i - 1] = array[j];
    array[j] = temp;

    // Reverse suffix
    j = array.length - 1;
    while (i < j) {
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      i++;
      j--;
    }
    return array;
  }

  it('nextPermutation', () => {
    const q = nextPermutation('dmsym'.split(''));
    console.log(q);
  });
});
