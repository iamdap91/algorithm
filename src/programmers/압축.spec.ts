describe('압축.spec.ts', () => {
  // 1. 길이가 1인 모든 단어를 포함하도록 사전을 초기화한다.
  const dictionary: { [key: string]: number } = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };
  const set = new Set<string>(Object.keys(dictionary));

  function figureLongestW(text: string): string {
    for (let i = text.length; i > 0; i--) {
      const sub = text.substring(0, i);
      if (set.has(sub)) {
        return sub;
      }
    }
  }

  function solution(msg: string) {
    const answer: number[] = [];
    while (msg.length > 0) {
      // 2. 사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다.
      const w = figureLongestW(msg);

      // 3. w에 해당하는 사전의 색인 번호를 출력하고, 입력에서 w를 제거한다.
      answer.push(dictionary[w]);
      msg = msg.substring(w.length);

      // 4. 입력에서 처리되지 않은 다음 글자가 남아있다면(c), w+c에 해당하는 단어를 사전에 등록한다.
      if (msg[0] && !set.has(w + msg[0])) {
        dictionary[w + msg[0]] = Object.keys(dictionary).length + 1;
        set.add(w + msg[0]);
      }
    }

    return answer;
  }

  it('solution', () => {
    // const result = solution('KAKAO');
    const result = solution('TOBEORNOTTOBEORTOBEORNOT');
    // const result = solution('ABABABABABABABAB');
    console.log(result);
  });
});
