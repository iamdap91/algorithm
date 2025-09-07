function utopianTree(totlaCycle: number) {
  let height = 1;

  for (let i = 0; i < totlaCycle; i++) {
    if (i % 2 === 0) {
      height *= 2;
    } else {
      height += 1;
    }
  }

  return height;
}

it('utopian-tree', () => {
  const result = utopianTree(5);
  console.log(result);
});
