function makingRectangle(coords: number[][]) {
  const xMap = new Map<number, number>();
  const yMap = new Map<number, number>();

  for (const [x, y] of coords) {
    xMap.set(x, (xMap.get(x) || 0) + 1);
    yMap.set(y, (yMap.get(y) || 0) + 1);
  }

  let x = 0;
  for (const [key, value] of [...xMap]) {
    if (value === 1) {
      x = +key;
      break;
    }
  }

  let y = 0;
  for (const [key, value] of [...yMap]) {
    if (value === 1) {
      y = +key;
      break;
    }
  }

  return [x, y];
}

it('making-rectangle', () => {
  const result = makingRectangle([
    [1, 4],
    [3, 4],
    [3, 10],
  ]); //[1,10]

  // const result = [
  //   [1, 4],
  //   [3, 4],
  //   [3, 10],
  // ]; //[2,1]

  console.log(result);
});
