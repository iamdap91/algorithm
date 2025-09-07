function calculate(S: string): number {
  const length = S.length;
  if (length > 100) {
    return 0;
  }

  const count = Array(100).fill(0);
  for (let i = 0; i < length - 1; i++) {
    const num = parseInt(S.substring(i, i + 2));
    count[num] = 1;
  }

  return count.reduce((a, b) => a + b, 0);
}

function solution(): string {
  let str = '0';
  for (let i = 0; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      switch (true) {
        case str.length === 99:
          return str + '9';
        case str.length === 100:
          return str;
      }

      if (j < i) {
        continue;
      }

      if (i === j) {
        str += '' + j;
      } else {
        str += '' + i + j;
      }
    }
  }

  return str;
}

it('naver - calculate', () => {
  const str = solution();
  const result = calculate(str);
  console.log(str);
  console.log(result);
});
