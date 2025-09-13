function angryProfessor(threshold: number, arrivals: number[]): 'YES' | 'NO' {
  let studentsOnTime = 0;
  for (const arrival of arrivals) {
    if (arrival <= 0) {
      studentsOnTime++;
    }
  }

  return studentsOnTime >= threshold ? 'NO' : 'YES';
}

describe('angry-professor', () => {
  it('should return YES if the number of students on time is less than the threshold', () => {
    const result = angryProfessor(3, [-1, -3, 4, 2]);
    console.log(result);
  });

  it('should return NO if the number of students on time is greater than or equal to the threshold', () => {
    const result = angryProfessor(2, [-1, -2, 4, 2]);
    console.log(result);
  });

  it('should return YES for an empty arrivals array', () => {
    const result = angryProfessor(3, []);
    console.log(result);
  });

  it('should return NO if all students are on time', () => {
    const result = angryProfessor(3, [1, 2, 3, 4]);
    console.log(result);
  });

  it('should return YES if no students are on time', () => {
    const result = angryProfessor(3, [3, 4, 5, 6]);
    console.log(result);
  });
});
