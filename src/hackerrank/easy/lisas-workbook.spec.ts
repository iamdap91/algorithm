describe('template', () => {
  function workbook(
    n: number,
    limit: number,
    workoutsInChapter: number[],
  ): number {
    const pages: number[][] = [[]];
    for (const workoutLimit of workoutsInChapter) {
      const loopCount = Math.ceil(workoutLimit / limit);
      for (let i = 0; i < loopCount; i++) {
        const page: number[] = [];
        for (let j = 0; j < limit; j++) {
          const workoutNumber = i * limit + j + 1;
          if (workoutNumber > workoutLimit) {
            break;
          }
          page.push(workoutNumber);
        }
        pages.push(page);
      }
    }

    let specialCount = 0;
    for (let i = 1; i < pages.length; i++) {
      const page = pages[i];
      const hasSpecial = page.includes(i);
      if (hasSpecial) {
        specialCount += 1;
      }
    }

    return specialCount;
  }

  it('solution', () => {
    const result = workbook(5, 3, [4, 2, 6, 1, 10]);
    console.log(result);
  });
});
