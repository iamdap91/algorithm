describe('캐시.spec.ts', () => {
  function solution(cacheSize: number, cities: string[]): number {
    if (cacheSize === 0) return cities.length * 5;

    cities = cities.map((item) => item.toLowerCase());

    let result = 0;
    const cache: string[] = [];

    for (const city of cities) {
      const cacheIndex = cache.indexOf(city);

      // cache hit
      if (cacheIndex !== -1) {
        // 기존 위치에서 제거하고 맨 뒤로 이동 (최근 사용)
        cache.splice(cacheIndex, 1);
        cache.push(city);
        result += 1;
      }
      // cache miss
      else {
        // 캐시가 가득 찬 경우 가장 오래된 것 제거
        if (cache.length === cacheSize) {
          cache.shift();
        }
        cache.push(city);
        result += 5;
      }
    }

    return result;
  }

  it('solution', () => {
    const result = solution(3, [
      'Jeju',
      'Pangyo',
      'Seoul',
      'Jeju',
      'Pangyo',
      'Seoul',
      'Jeju',
      'Pangyo',
      'Seoul',
    ]);
    console.log(result);
  });
});
