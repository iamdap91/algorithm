describe('flatland-space-station.spec.ts', () => {
  function flatlandSpaceStations(n: number, stations: number[]) {
    let maxDistance = 0;
    for (let i = 0; i < n; i++) {
      if (stations.includes(i)) {
        continue;
      }

      // 각 포지션별 스테이션 최소거리
      let minDistanceForStation = Number.MAX_SAFE_INTEGER;
      for (const station of stations) {
        const distance = Math.abs(i - station);
        if (distance < minDistanceForStation) {
          minDistanceForStation = distance;
        }
      }

      if (minDistanceForStation > maxDistance) {
        maxDistance = minDistanceForStation;
      }
    }

    return maxDistance;
  }

  it('solution', () => {
    const result = flatlandSpaceStations(5, [0, 2]);
    console.log(result);
  });
});
