describe('뉴스클러스터링.spec.ts', () => {
  function splitToTwoChars(text: string): string[] {
    const twoCharsArray: string[] = [];
    for (let i = 0; i < text.length - 1; i++) {
      const first = text[i];
      const second = text[i + 1];

      // validation
      const firstValidation = text[i].match(/[a-zA-Z]/);
      const secondValidation = text[i + 1].match(/[a-zA-Z]/);
      if (!firstValidation || !secondValidation) {
        continue;
      }

      const twoChars = (first + second).toLowerCase();
      twoCharsArray.push(twoChars);
    }

    return twoCharsArray;
  }

  function figureUnion(arr1: string[], arr2: string[]) {
    const arr1Map = new Map<string, number>();
    for (const item of arr1) {
      const prev = arr1Map.get(item) || 0;
      arr1Map.set(item, prev + 1);
    }

    const arr2Map = new Map<string, number>();
    for (const item of arr2) {
      const prev = arr2Map.get(item) || 0;
      arr2Map.set(item, prev + 1);
    }

    const result: string[] = [];
    for (const key of [...new Set<string>([...arr1, ...arr2])]) {
      const count1 = arr1Map.get(key) || 0;
      const count2 = arr2Map.get(key) || 0;
      const maxCount = Math.max(count1, count2);

      const items = Array.from<string>({ length: maxCount }).fill(key);
      result.push(...items);
    }

    return result;
  }

  function figureIntersection(arr1: string[], arr2: string[]) {
    const arr1Map = new Map<string, number>();
    for (const item of arr1) {
      const prev = arr1Map.get(item) || 0;
      arr1Map.set(item, prev + 1);
    }

    const arr2Map = new Map<string, number>();
    for (const item of arr2) {
      const prev = arr2Map.get(item) || 0;
      arr2Map.set(item, prev + 1);
    }

    const result: string[] = [];
    for (const key of [...new Set<string>([...arr1, ...arr2])]) {
      const count1 = arr1Map.get(key) || 0;
      const count2 = arr2Map.get(key) || 0;
      const minCount = Math.min(count1, count2);

      if (minCount > 0) {
        const items = Array.from<string>({ length: minCount }).fill(key);
        result.push(...items);
      }
    }

    return result;
  }

  function solution(text1: string, text2: string) {
    const twoCharsArray1 = splitToTwoChars(text1);
    const twoCharsArray2 = splitToTwoChars(text2);

    const intersection = figureIntersection(twoCharsArray1, twoCharsArray2);
    const union = figureUnion(twoCharsArray1, twoCharsArray2);

    if (intersection.length === 0 && union.length === 0) {
      return 65536;
    }

    return Math.floor((intersection.length / union.length) * 65536);
  }

  it('solution', () => {
    // const result = solution('FRANCE', 'french');
    // const result = solution('handshake', 'shake hands');
    // const result = solution('aa1+aa2', 'AAAA12');
    // const result = solution('1234', '2345');
    const result = solution('E=M*C^2', 'e=m*c^2');
    console.log(result);
  });
});
