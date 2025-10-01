describe('방금그곡.spec.ts', () => {
  function parseNotes(melody: string): string[] {
    const codes: string[] = [];
    for (let i = 0; i < melody.length; i++) {
      const current = melody[i];
      const next = melody[i + 1];
      if (next === '#') {
        codes.push(current + next);
        i += 1;
      } else {
        codes.push(current);
      }
    }
    return codes;
  }

  function figureDuration(start: string, end: string): number {
    const startTime = new Date();
    const [shour, smin] = start.split(':');
    startTime.setHours(+shour);
    startTime.setMinutes(+smin);

    const endTime = new Date();
    const [ehour, emin] = end.split(':');
    endTime.setHours(+ehour);
    endTime.setMinutes(+emin);

    const duration = Math.floor(
      (endTime.getTime() - startTime.getTime()) / 1000 / 60,
    );

    return duration;
  }

  function figureTotalMelody(duration: number, melody: string): string[] {
    const codes = parseNotes(melody);

    const result = [];
    for (let i = 0; i < duration; i++) {
      result.push(codes[i % codes.length]);
    }

    return result;
  }

  function isSubsequence(target: string[], source: string[]): boolean {
    if (target.length > source.length) {
      return false;
    }

    for (let i = 0; i <= source.length - target.length; i++) {
      let match = true;
      for (let j = 0; j < target.length; j++) {
        if (source[i + j] !== target[j]) {
          match = false;
          break;
        }
      }
      if (match) return true;
    }
    return false;
  }

  function solution(m: string, musicInfos: string[]): string {
    //   방금그곡 서비스에서는 음악 제목, 재생이 시작되고 끝난 시각, 악보를 제공한다.
    //   네오가 기억한 멜로디와 악보에 사용되는 음은 C, C#, D, D#, E, F, F#, G, G#, A, A#, B 12개이다.
    //   각 음은 1분에 1개씩 재생된다. 음악은 반드시 처음부터 재생되며 음악 길이보다 재생된 시간이 길 때는 음악이 끊김 없이 처음부터 반복해서 재생된다. 음악 길이보다 재생된 시간이 짧을 때는 처음부터 재생 시간만큼만 재생된다.
    //   음악이 00:00를 넘겨서까지 재생되는 일은 없다.
    //   조건이 일치하는 음악이 여러 개일 때에는 라디오에서 재생된 시간이 제일 긴 음악 제목을 반환한다. 재생된 시간도 같을 경우 먼저 입력된 음악 제목을 반환한다.
    //   조건이 일치하는 음악이 없을 때에는 “(None)”을 반환한다.

    const targetNode = parseNotes(m);
    const melodyIncludesTarget = [];
    for (const musicInfo of musicInfos) {
      const [start, end, title, melody] = musicInfo.split(',');
      const duration = figureDuration(start, end);
      const totalMelody = figureTotalMelody(duration, melody);

      if (isSubsequence(targetNode, totalMelody)) {
        melodyIncludesTarget.push({ start, end, title, melody, duration });
      }
    }

    melodyIncludesTarget.sort((a, b) => b.duration - a.duration);
    if (melodyIncludesTarget.length > 0) {
      return melodyIncludesTarget[0].title;
    }

    return '(None)';
  }

  it('solution', () => {
    // 라디오를 자주 듣는 네오는 라디오에서 방금 나왔던 음악이 무슨 음악인지 궁금해질 때가 많다.
    // 그럴 때 네오는 다음 포털의 '방금그곡' 서비스를 이용하곤 한다.
    // 방금그곡에서는 TV, 라디오 등에서 나온 음악에 관해 제목 등의 정보를 제공하는 서비스이다.
    //
    //   네오는 자신이 기억한 멜로디를 가지고 방금그곡을 이용해 음악을 찾는다.
    //   그런데 라디오 방송에서는 한 음악을 반복해서 재생할 때도 있어서 네오가 기억하고 있는 멜로디는 음악 끝부분과 처음 부분이 이어서 재생된 멜로디일 수도 있다.
    //   반대로, 한 음악을 중간에 끊을 경우 원본 음악에는 네오가 기억한 멜로디가 들어있다 해도 그 곡이 네오가 들은 곡이 아닐 수도 있다.
    //   그렇기 때문에 네오는 기억한 멜로디를 재생 시간과 제공된 악보를 직접 보면서 비교하려고 한다. 다음과 같은 가정을 할 때 네오가 찾으려는 음악의 제목을 구하여라.
    // 기억한 멜로디
    // const m = 'ABCDEFG';
    // const musicinfos = [
    //   '12:00,12:14,HELLO,CDEFGAB',
    //   '13:00,13:05,WORLD,ABCDEF',
    // ];

    // const m = 'CC#BCC#BCC#BCC#B';
    // const musicinfos = ['03:00,03:30,FOO,CC#B', '04:00,04:08,BAR,CC#BCC#BCC#B'];

    const q = 'C#DEFG'.includes('C#');
    console.log(q);

    const m = 'ABC';
    const musicinfos = [
      '12:00,12:14,HELLO,C#DEFGAB',
      '13:00,13:05,WORLD,ABCDEF',
    ];

    const result = solution(m, musicinfos);
    console.log(result);
  });
});
