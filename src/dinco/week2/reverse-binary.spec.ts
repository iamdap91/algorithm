describe('reverse-binary.spec.ts', () => {
  function reverseBinary(text: string): number {
    const groupCount = [0, 0];
    let prev = -1;
    for (let i = 0; i < text.length; i++) {
      const current = +text[i];
      if (current !== prev) {
        groupCount[Number(current)]++;
        prev = current;
      }
    }

    return Math.min(...groupCount);
  }

  it('solution', () => {
    const result = reverseBinary('0001100');
    console.log(result);
  });
});
