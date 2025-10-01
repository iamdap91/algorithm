describe('encryption', () => {
  function sliceByLength(text: string, n: number): string[] {
    const slices: string[] = [];
    for (let i = 0; i < text.length; i += n) {
      slices.push(text.substring(i, i + n));
    }
    return slices;
  }

  function groupTexts(texts: string[]): number {
    let result = '';
    let repeat = 1;
    let prevText = texts[0];
    for (let i = 1; i < texts.length; i++) {
      const currentSlice = texts[i];

      if (prevText === currentSlice) {
        repeat++;
      } else {
        const multiplier = repeat > 1 ? repeat.toString() : '';
        result += `${multiplier}${prevText}`;
        repeat = 1;
        prevText = currentSlice;
      }
    }

    // 마지막 그룹 처리
    const multiplier = repeat > 1 ? repeat.toString() : '';
    result += `${multiplier}${prevText}`;

    console.log(result);
    return result.length;
  }

  function encrypt(text: string, n: number): number {
    const slices = sliceByLength(text, n);
    return groupTexts(slices);
  }

  function solution(text: string): number {
    const results = [];
    for (let i = 1; i <= text.length / 2; i++) {
      results.push(encrypt(text, i));
    }

    return Math.min(...results);
  }

  it('solution ', () => {
    // const result = encryption('aabbaccc');
    // const result = encryption('aabbaccc');
    // const result = encryption('ababcdcdababcdcd');
    // const result = encryption('abcabcdede');
    const result = solution('abcabcabcabcdededededede');
    console.log(result);
  });
});
