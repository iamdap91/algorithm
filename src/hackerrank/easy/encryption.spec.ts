describe('encryption.spec.ts', () => {
  function encryption(str: string): string {
    const sqrt = Math.sqrt(str.length);
    // const rowLength = Math.floor(sqrt);
    const columnLength = Math.ceil(sqrt);
    let newString = '';

    for (let i = 0; i < columnLength; i++) {
      for (let j = i; j < str.length; j += columnLength) {
        newString += str[j];
      }
      newString += ' ';
    }

    return newString;
  }

  it('solution', () => {
    const result = encryption('haveaniceday');
    console.log(result);
  });
});
