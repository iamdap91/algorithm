describe('append-and-delete', () => {
  function appendAndDelete(
    initial: string,
    desired: string,
    attempts: number,
  ): string {
    // 시행 횟수가 초기 문자열 길이보다 클 때
    if (attempts > initial.length) {
      if (attempts - initial.length >= desired.length) {
        return 'Yes';
      }
      return 'No';
    }

    // 그 외
    let commonLength = 0;
    for (let i = 0; i < desired.length; i++) {
      if (initial[i] === desired[i]) {
        commonLength++;
      } else {
        break;
      }
    }

    const initialDiff = initial.length - commonLength;
    const desiredDiff = desired.length - commonLength;

    if (attempts - initialDiff >= desiredDiff) {
      return 'Yes';
    }
    return 'No';
  }

  it('append-and-delete.spec.ts', () => {
    // const result = appendAndDelete('abc', 'def', 6);
    // const result = appendAndDelete('aba', 'aba', 7);
    // const result = appendAndDelete('hackerhappy', 'hackerrank', 9);
    const result = appendAndDelete('y', 'yu', 2);
    // const result = appendAndDelete('ashley', 'ash', 2);
    console.log(result);
  });
});
