describe('filter-non-letters', () => {
  function isAlphabeticPalindrome(code: string): boolean {
    const chars = code.match(/[a-z]|[A-Z]/g) || [];

    const front = chars.join('').toLowerCase();
    const reversed = front.split('').reverse().join('');
    return front === reversed;
  }

  it('solution', () => {
    const result = isAlphabeticPalindrome('');
    // const result = isAlphabeticPalindrome('Z');
    console.log(result);
  });
});
