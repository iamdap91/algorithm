describe('correct-parenthesis', () => {
  function separateToUV(text: string): [string, string] {
    const stack = text.split('').reverse();
    let u = '';
    let leftCount = 0;
    let rightCount = 0;

    while (stack.length > 0) {
      const char = stack.pop();
      u += char;
      if (char === '(') {
        leftCount += 1;
      } else if (char === ')') {
        rightCount += 1;
      }

      if (leftCount === rightCount) {
        break;
      }
    }

    return [u, stack.join('')];
  }

  function isClosedParenthesis(parenthesis: string) {
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

  function reverseParenthesis(parenthesis: string) {
    let result = '';
    for (const char of parenthesis) {
      if (char === '(') {
        result += ')';
      } else if (char === ')') {
        result += '(';
      }
    }
    return result;
  }

  function correctParenthesis(text: string): string {
    // 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
    if (text.length === 0) {
      return '';
    }

    // 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다.
    const [u, v] = separateToUV(text);

    // 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
    // 3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.
    if (isClosedParenthesis(u)) {
      return u + correctParenthesis(v);
    }

    // 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
    // 4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다.
    // 4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다.
    // 4-3. ')'를 다시 붙입니다.
    // 4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.
    // 4-5. 생성된 문자열을 반환합니다.
    const reversed = reverseParenthesis(u.substring(1, u.length - 1));
    return '(' + correctParenthesis(v) + ')' + reversed;
  }

  it('solution', () => {
    // const result = correctParenthesis(')(');
    // const result = correctParenthesis(')(()');
    // const result = correctParenthesis('()))((()');
    const result = correctParenthesis(')()()(()');

    console.log(result);
  });
});
