function squares(start: number, end: number): number {
  const startSqrt = Math.ceil(Math.sqrt(start));
  const endSqrt = Math.floor(Math.sqrt(end));

  return endSqrt - startSqrt + 1;
}

it('sherlock-and-square', () => {
  // const result = squares(24, 48);
  // const result = squares(3, 9);
  const result = squares(17, 24);
  // const result = squares(35, 70);
  // const result = squares(100, 1000);
  console.log(result);
});
