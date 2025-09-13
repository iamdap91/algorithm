describe('organizing-containers-of-balls.spec.ts', () => {
  function organizingContainers(containers: number[][]): string {
    const n = containers.length;

    // 1. 각 컨테이너의 총 공 개수 계산 (컨테이너 용량)
    //    containerCapacities[i]는 i번째 컨테이너의 총 공 개수를 저장합니다.
    const containerCapacities: number[] = [];
    for (const container of containers) {
      const total = container.reduce((sum, count) => sum + count, 0);
      containerCapacities.push(total);
    }

    // 2. 각 공 종류별 총 공 개수 계산
    //    ballTypeCounts[j]는 j번째 공 종류의 총 개수를 저장합니다.
    const ballTypeCounts: number[] = new Array(n).fill(0);
    for (const container of containers) {
      for (let i = 0; i < n; i++) {
        ballTypeCounts[i] += container[i];
      }
    }

    // 3. 두 목록을 각각 정렬합니다.
    containerCapacities.sort((a, b) => a - b);
    ballTypeCounts.sort((a, b) => a - b);

    // 4. 정렬된 두 목록을 비교합니다.
    //    모든 요소가 동일한지 확인합니다.
    for (let i = 0; i < n; i++) {
      if (containerCapacities[i] !== ballTypeCounts[i]) {
        return 'Impossible';
      }
    }

    return 'Possible';
  }

  it('solution', () => {
    // const container1 = [
    //   [1, 1],
    //   [1, 1],
    // ];
    // console.log(organizingContainers(container1)); // Expected: Possible
    //
    // const container2 = [
    //   [0, 2],
    //   [1, 1],
    // ];
    // console.log(organizingContainers(container2)); // Expected: Impossible (Container 0: 2, Container 1: 2, Type 0: 1, Type 1: 3 -> 불일치)
    //
    const container3 = [
      [1, 3, 1],
      [2, 1, 2],
      [3, 3, 3],
    ];
    console.log(organizingContainers(container3)); // Expected: Impossible

    // const container4 = [
    //   [1, 0, 0],
    //   [0, 1, 0],
    //   [0, 0, 1],
    // ];
    // console.log(organizingContainers(container4)); // Expected: Possible
  });
});
