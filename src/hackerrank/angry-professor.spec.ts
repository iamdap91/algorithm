function angryProfessor(threshold: number, arrivals: number[]): 'YES' | 'NO' {
  let studentsOnTime = 0;
  for (const arrival of arrivals) {
    if (arrival <= 0) {
      studentsOnTime++;
    }
  }

  return studentsOnTime >= threshold ? 'NO' : 'YES';
}

it('angry-professors', () => {
  const result = angryProfessor(3, [-1, -3, 4, 2]);
  console.log(result);
});
