function calculateDistance(x1: number, y1: number, x2: number, y2: number) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

it('distance-of-two-points', () => {
  expect(calculateDistance(0, 0, 3, 4)).toBe(5);
});
