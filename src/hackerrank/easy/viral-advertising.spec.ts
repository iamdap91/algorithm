function viralAdvertising(day: number): number {
  let likes = 0;
  let shared = 5;

  for (let i = 1; i <= day; i++) {
    const likedToday = Math.floor(shared / 2);
    likes += likedToday;

    // for next day
    shared = likedToday * 3;
  }

  return likes;
}

it('viral-advertising.spec.ts', () => {
  const result = viralAdvertising(3);
  console.log(result);
});
