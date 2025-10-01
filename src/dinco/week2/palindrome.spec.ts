describe('palindrome.spec.ts', () => {
  function palindromeRecursive(text: string): boolean {
    if (text.length <= 1) {
      return true;
    }

    const start = text[0];
    const end = text[text.length - 1];
    if (start !== end) {
      return false;
    }

    const slicedText = text.slice(1, text.length - 1);
    return palindromeRecursive(slicedText);
  }

  function palindrome(text: string): boolean {
    for (let i = 0; i < text.length; i++) {
      const front = text[i];
      const back = text[text.length - 1 - i];
      if (front !== back) {
        return false;
      }
    }
    return true;
  }

  it('solution', () => {
    const result = palindrome('abcbab');
    console.log(result);
  });

  it('solution - recursive', () => {
    const result = palindromeRecursive('ababa');
    console.log(result);
  });
});
