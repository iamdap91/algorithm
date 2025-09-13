describe('beautiful-days-at-the-movies', () => {
  function beautifulDays(
    startingDate: number,
    endDate: number,
    divisor: number,
  ): number {
    let count = 0;

    for (let date = startingDate; date <= endDate; date++) {
      const inOrder = date;
      const reversed = +date.toString().split('').reverse().join('');

      if ((inOrder - reversed) % divisor === 0) {
        count++;
      }
    }

    return count;
  }

  it('beautiful-days-at-the-movies', () => {
    const result = beautifulDays(20, 23, 6);
    console.log(result);
  });
});
