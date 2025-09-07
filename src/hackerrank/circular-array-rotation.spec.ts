function circularArrayRotation(
  array: number[],
  attempts: number,
  queries: number[],
): number[] {
  const actualAttempts = attempts % array.length;
  const rotatedArray = new Array(array.length);
  for (let i = 0; i < array.length; i++) {
    const newIndex = (i + actualAttempts) % array.length;
    rotatedArray[newIndex] = array[i];
  }

  return queries.map((index) => rotatedArray[index]);
}

it('circular-array-rotation.spec.ts', () => {
  const result = circularArrayRotation([1, 2, 3], 8, [0, 1, 2]);
  console.log(result);
});
