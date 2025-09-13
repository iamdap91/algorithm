describe('modified-kaprekar-numbers.spec.ts', () => {
  function kaprekarNumbers(start: number, end: number): void {
    const result = [];
    for (let i = start; i <= end; i++) {
      const power = Math.pow(i, 2);
      const middle = Math.floor(`${power}`.length / 2);

      const front = `${power}`.slice(0, middle);
      const back = `${power}`.slice(middle);

      if (+front + +back === i) {
        result.push(i);
      }
    }

    if (result.length === 0) {
      console.log('INVALID RANGE');
      return;
    }

    console.log(result.join(' '));
  }

  it('solution', () => {
    kaprekarNumbers(400, 700);
  });
});
