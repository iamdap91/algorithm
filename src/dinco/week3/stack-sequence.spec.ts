describe('stack-sequence.spec.ts', () => {
  function stackSequence(sequence: number[]): string[] | string {
    const result = [];
    const stack = [];

    let current = 1; // 다음에 push할 숫자
    for (const target of sequence) {
      // target이 나올 때까지 push
      while (current <= target) {
        stack.push(current);
        result.push('+');
        current++;
      }

      // 스택 top이 target과 같으면 pop
      if (stack[stack.length - 1] === target) {
        stack.pop();
        result.push('-');
      } else {
        // target보다 큰 수가 스택 top에 있으면 불가능
        return 'NO';
      }
    }

    return result;
  }

  it('solution', () => {
    const result = stackSequence([4, 3, 6, 8, 7, 5, 2, 1]);
    // const result = stackSequence([4, 3, 2, 1]);
    // const result = stackSequence([1, 2, 5, 3, 4]);
    // const result = stackSequence([1, 2, 3, 4]);
    console.log(result);
  });
});
