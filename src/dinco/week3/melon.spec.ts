describe('melon.spec.ts', () => {
  function melon(genres: string[], plays: number[]): number[] {
    const playCountByGenresMap = new Map<string, number>();
    const playCountByIndexMap = new Map<
      string,
      { index: number; play: number }[]
    >();

    for (let i = 0; i < genres.length; i++) {
      const genre = genres[i];
      const play = plays[i];
      const prev = playCountByGenresMap.get(genre) || 0;
      playCountByGenresMap.set(genre, prev + play);

      const prevIndexItem = playCountByIndexMap.get(genre) || [];
      prevIndexItem.push({ index: i, play });
      playCountByIndexMap.set(genre, prevIndexItem);
    }

    const result: number[] = [];
    const list = Array.from(playCountByGenresMap.entries()).sort(
      (a, b) => b[1] - a[1],
    );

    for (const [genre] of list) {
      const songs = playCountByIndexMap.get(genre);
      songs.sort((a, b) => b.play - a.play);
      const indexes = songs.slice(0, 2).map((item) => item.index);
      result.push(...indexes);
    }

    //  1. 속한 노래가 많이 재생된 장르를 먼저 수록한다. (단, 각 장르에 속한 노래의재생 수 총합은 모두 다르다.)
    //  2. 장르 내에서 많이 재생된 노래를 먼저 수록한다.
    //  3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록한다.
    return result;
  }

  it('solution', () => {
    // const result = closedParenthesis('((asdf))()');
    const result = melon(
      ['classic', 'pop', 'classic', 'classic', 'pop'],
      [500, 600, 150, 800, 2500],
    );
    console.log(result);
  });
});
