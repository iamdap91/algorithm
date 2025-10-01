describe('삼성역량테스트3.spec.ts', () => {
  function getCombinations<T>(array: T[], r: number): T[][] {
    const result: T[][] = [];

    function backtrack(start: number, currentCombination: T[]) {
      // 조합이 완성되면 결과에 추가
      if (currentCombination.length === r) {
        result.push([...currentCombination]);
        return;
      }

      // start부터 배열 끝까지 반복
      for (let i = start; i < array.length; i++) {
        currentCombination.push(array[i]);
        backtrack(i + 1, currentCombination);
        currentCombination.pop(); // 백트래킹

        // console.log(1);
      }
    }

    backtrack(0, []);
    return result;
  }

  function figureDistance(
    source: [number, number],
    target: [number, number],
  ): number {
    return Math.abs(source[0] - target[0]) + Math.abs(source[1] - target[1]);
  }

  function solution(cityMap: number[][], m: number): number {
    const houses: string[] = [];
    const shops: string[] = [];
    for (let i = 0; i < cityMap.length; i++) {
      for (let j = 0; j < cityMap[i].length; j++) {
        if (cityMap[i][j] === 1) {
          houses.push(`${i}:${j}`);
        } else if (cityMap[i][j] === 2) {
          shops.push(`${i}:${j}`);
        }
      }
    }

    const shopCombinations = getCombinations(shops, m);

    const distanceResults: number[] = [];
    for (const combination of shopCombinations) {
      let totalMinDistance = 0;
      const shopPositions: [number, number][] = [];
      for (const shop of combination) {
        const shopPosition = shop.split(':').map((item) => +item);
        shopPositions.push(shopPosition as [number, number]);
      }

      for (const house of houses) {
        const housePosition = house.split(':').map((item) => +item) as [
          number,
          number,
        ];

        let distance = Number.MAX_SAFE_INTEGER;
        for (const shopPosition of shopPositions) {
          const currentDistance = figureDistance(housePosition, shopPosition);
          distance = Math.min(distance, currentDistance);
        }

        totalMinDistance += distance;
      }
      distanceResults.push(totalMinDistance);
    }

    return Math.min(...distanceResults);
  }

  it('solution', () => {
    // 0은 빈 칸, 1은 집, 2는 치킨집이다.
    // 1 <= 집의 갯수 <= 2N
    // M <= 치킨집 갯수 <= 13
    // 거리 = |row - row'| + |col - col'|

    // 오랜 연구 끝에 이 도시에서 가장 수익을 많이 낼 수 있는  치킨집의 개수는 최대 M개라는 사실을 알아내었다.
    // 도시에 있는 치킨집 중에서 최대 M개를 고르고, 나머지 치킨집은 모두 폐업시켜야 한다. 어떻게 고르면, 도시의 치킨 거리가 가장 작게 될지 반환하시오.

    const map = [
      [1, 2, 0, 0, 0],
      [1, 2, 0, 0, 0],
      [1, 2, 0, 0, 0],
      [1, 2, 0, 0, 0],
      [1, 2, 0, 0, 0],
    ];

    const result = solution(map, 1);
    console.log(result);
  });
});
