describe('halloween-sale.spec.ts', () => {
  function howManyGames(
    price: number,
    discountPerGame: number,
    minimumPrice: number,
    money: number,
  ): number {
    let games = 0;
    for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
      let priceInThisRound = price - i * discountPerGame;
      if (priceInThisRound < minimumPrice) {
        priceInThisRound = minimumPrice;
      }

      if (money >= priceInThisRound) {
        games++;
        money -= priceInThisRound;
      } else {
        break;
      }
    }

    return games;
  }

  it('solution', () => {
    const result = howManyGames(20, 3, 6, 85);
    console.log(result);
  });
});
