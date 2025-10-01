describe('closed-parenthesis.spec.ts', () => {
  function closedParenthesis(parenthesis: string) {
    const stack = [];
    for (const item of parenthesis) {
      if (item === '(') {
        stack.push(item);
      } else if (stack[stack.length - 1] === '(' && item === ')') {
        stack.pop();
      }
    }

    return !stack.length;
  }

  it('solution', () => {
    // const result = closedParenthesis('((asdf))()');
    const result = closedParenthesis('((((');
    console.log(result);
  });
});
