describe('save-the-prisoner', () => {
  function saveThePrisoner(
    prisoners: number,
    candies: number,
    startsAt: number,
  ): number {
    const index = (candies - 1 + (startsAt - 1)) % prisoners;
    return index + 1;
  }

  it('**save-the-prisoner.spec.ts', () => {
    const result = saveThePrisoner(3, 7, 3);
    console.log(result);
  });
});
