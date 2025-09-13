describe('subarray', () => {
  function findSmallestSubstringWindow(
    patterns: string[],
    text: string,
  ): number[] {
    const patternOccurrences: { index: number; length: number }[][] = [];

    for (const pattern of patterns) {
      const regex = new RegExp(pattern, 'g');
      const positions = Array.from(text.matchAll(regex));
      if (positions.length === 0) {
        return [-1, -1];
      }

      const occurences = [];
      for (const position of positions) {
        occurences.push({ index: position.index, length: pattern.length });
      }
      patternOccurrences.push(occurences);
    }

    let minLength = Infinity;
    let result: number[] = [-1, -1];

    // backtraking
    function findMinWindow(indices: number[], depth: number): void {
      if (depth === patterns.length) {
        // 모든 패턴에 대해 하나씩 인덱스를 선택했음
        let minStart = Infinity;
        let maxEnd = -Infinity;

        for (let i = 0; i < indices.length; i++) {1
          const start = indices[i];
          const end = start + patterns[i].length - 1;
          minStart = Math.min(minStart, start);
          maxEnd = Math.max(maxEnd, end);
        }

        const length = maxEnd - minStart + 1;

        if (length < minLength) {
          minLength = length;
          result = [minStart, maxEnd];
        }

        return;
      }

      // 현재 패턴의 각 출현 위치를 시도
      for (const occurrence of patternOccurrences[depth]) {
        indices.push(occurrence.index);
        findMinWindow(indices, depth + 1);
        indices.pop();
      }
    }

    findMinWindow([], 0);

    return result;
  }

  it('solution', () => {
    // const result = findSmallestSubstringWindow(
    //   ['xy', 'abc', 'zyx'],
    //   'abxyzabcabczyx',
    // );

    const result = findSmallestSubstringWindow(['abc', 'zyx'], 'xyzabcabczyx');
    console.log(result);
  });
});
