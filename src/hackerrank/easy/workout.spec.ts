function findDigits(num: number): number {
  const digits = num.toString().split('');

  let count = 0;
  for (const digit of digits) {
    if (num % +digit === 0) {
      count++;
    }
  }
  return count;
}

function cutTheSticks(sticks: number[]): number[] {
  // const figureMin = (arr: number[]) => Math.min(...arr.filter((n) => n > 0));

  const result = [sticks.length];

  let current = [...sticks];
  while (current.length >= 2) {
    const set = new Set(current);
    if (set.size === 1) {
      return result;
    }

    const min = Math.min(...current);
    current = current.map((stick) => stick - min).filter((stick) => stick > 0);
    result.push(current.length);
  }

  return result;
}

function libraryFine(
  d1: number,
  m1: number,
  y1: number,
  d2: number,
  m2: number,
  y2: number,
): number {
  const returned = new Date(`${y1}-${m1}-${d1}`);
  const due = new Date(`${y2}-${m2}-${d2}`);

  switch (true) {
    case due.getTime() >= returned.getTime():
      return 0;
    case due.getFullYear() !== returned.getFullYear():
      return 10000;
    case due.getMonth() !== returned.getMonth():
      return 500 * (returned.getMonth() - due.getMonth());
    case returned.getDate() !== due.getDate():
      return 15 * (returned.getDate() - due.getDate());
  }
}

function equalizeArray(nums: number[]): number {
  const map = new Map<number, number>();
  for (const num of nums) {
    const prev = map.get(num) || 0;
    map.set(num, prev + 1);
  }

  const values = Array.from(map.values());
  const max = Math.max(...values);
  return values.reduce((acc, current) => acc + current, 0) - max;
}

it('workout', () => {
  // const result = findDigits(12);
  // const result = libraryFine(1, 1, 2000, 1, 1, 2000); // 45
  // const result = cutTheSticks([5, 4, 4, 2, 2, 8]);
  const result = equalizeArray([5, 4, 4, 2, 2, 8]);
  console.log(result);
});
