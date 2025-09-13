describe('design-pdf-viewer', () => {
  function designerPdfViewer(h: number[], word: string): number {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetMap = new Map();
    for (let i = 0; i < alphabets.length; i++) {
      const char = alphabets[i];
      alphabetMap.set(char, i);
    }

    let maxHeight = 0;
    for (let j = 0; j < word.length; j++) {
      const char = word[j];
      const index = alphabetMap.get(char);
      const height = h[index];
      if (height > maxHeight) {
        maxHeight = height;
      }
    }

    return maxHeight * word.length;
  }

  it('design-pdf-viewer', () => {
    const result = designerPdfViewer(
      [
        1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
        5,
      ],
      'abc',
    );
    console.log(result);
  });
});
