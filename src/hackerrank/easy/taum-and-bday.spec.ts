describe('taum and bday', () => {
  function taumBday(
    b: number,
    w: number,
    bc: number,
    wc: number,
    z: number,
  ): bigint {
    const blackRequired = BigInt(b);
    const whiteRequired = BigInt(w);
    const blackCost = BigInt(bc);
    const whiteCost = BigInt(wc);
    const exchangePrice = BigInt(z);

    // 검은 최저가
    const minBlackCost =
      blackCost < whiteCost + exchangePrice
        ? blackCost
        : whiteCost + exchangePrice;
    // 백 최저가
    const minWhiteCost =
      whiteCost < blackCost + exchangePrice
        ? whiteCost
        : blackCost + exchangePrice;

    return blackRequired * minBlackCost + whiteRequired * minWhiteCost;
  }

  it('solution', () => {
    const result = taumBday(3, 5, 3, 4, 1);
    console.log(result);
  });
});
