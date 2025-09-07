function figureHasSequence(str: string, i: number, j: number): boolean {
  const map = new Map<string, number>();
  for (i; i <= j; i++) {
    const char = str[i];
    const prev = map.get(char) || 0;
    map.set(char, prev + 1);
  }

  for (const value of map.values()) {
    if (value > 1) {
      return true;
    }
  }

  return false;
}

function solutionSubstring(str: string): number {
  const length = str.length;
  if (length < 2) {
    return 0;
  }

  let count = 0;
  let i = 0;
  while (i < length - 1) {
    const startChar = str[i];
    let j = i + 1;

    // 현재 문자와 같은 문자를 오른쪽에서 찾기
    while (j < length && str[j] !== startChar) {
      j++;
    }

    // 같은 문자를 찾았다면 부분 문자열 형성 가능
    if (j < length) {
      // j - i > 2 이상이면 내부에 둘 이상 그루핑되는 케이스가 존재할 수 있음.
      if (j - i > 2 && figureHasSequence(str, i + 1, j - 1)) {
        i = i + 1;
        continue;
      }

      count++;
      i = j + 1;
    } else {
      i++; // 현재 위치에서 부분 문자열을 만들 수 없으므로 다음으로
    }
  }

  return count;
}

it('naver - substring', () => {
  const result = solutionSubstring('sashalikesana'); // 2
  // const result = solutionSubstring('zzaaabbccall'); // 5
  // const result = solutionSubstring('zzabbcca'); // 3
  // const result = solutionSubstring('zzazxcva');
  // const result = solutionSubstring('thing');
  console.log(result);
});
