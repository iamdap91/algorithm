describe('n진수게임.spec.ts', () => {
  // 진법 n, 미리 구할 숫자의 갯수 t, 게임에 참가하는 인원 m, 튜브의 순서 p 가 주어진다.
  function solution(n: number, t: number, m: number, p: number): string[] {
    let allNumbers = ''; // 모든 사람이 말할 숫자들을 이어붙임

    // 충분한 길이만큼 n진법 숫자를 생성
    let i = 0;
    while (allNumbers.length < t * m) {
      allNumbers += i.toString(n).toUpperCase();
      i++;
    }

    // p번째 순서만 추출 (인덱스는 p-1부터 시작, m간격으로)
    const result = [];
    for (let i = p - 1; i < t * m; i += m) {
      result.push(allNumbers[i]);
      if (result.length === t) break;
    }

    return result;
  }

  it('solution', () => {
    const result = solution(2, 4, 10, 2);
    console.log(result);
  });
});
