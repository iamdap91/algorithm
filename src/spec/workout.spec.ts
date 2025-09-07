function findMaxTeamSize(skills: number[]): number {
  if (skills.length === 0) {
    return 0;
  }

  // 1. Sort the skills array
  skills.sort((a, b) => a - b);

  let maxTeamSize: number = 0;
  let currentTeamSize: number = 0;

  // Iterate through the sorted skills to find valid teams
  for (let i = 0; i < skills.length; i++) {
    // If it's the first student or the skill difference is 0 or 1, add to current team
    if (i === 0 || skills[i] - skills[i - 1] <= 1) {
      currentTeamSize++;
    } else {
      // If the difference is greater than 1, a new team starts
      currentTeamSize = 1;
    }
    // Update the maximum team size found so far
    maxTeamSize = Math.max(maxTeamSize, currentTeamSize);
  }

  return maxTeamSize;
}

it('team', () => {
  // Example Usage:
  const skills1 = [10, 12, 13, 9, 14];
  console.log(
    `Skills: [${skills1}], Max Team Size: ${findMaxTeamSize(skills1)}`,
  ); // Expected: 3

  const skills2 = [4, 13, 2, 3];
  console.log(
    `Skills: [${skills2}], Max Team Size: ${findMaxTeamSize(skills2)}`,
  ); // Expected: 3 (for [2, 3, 4])

  const skills3 = [1, 5, 10, 15];
  console.log(
    `Skills: [${skills3}], Max Team Size: ${findMaxTeamSize(skills3)}`,
  ); // Expected: 1

  const skills4 = [1, 1, 1, 1];
  console.log(
    `Skills: [${skills4}], Max Team Size: ${findMaxTeamSize(skills4)}`,
  ); // Expected: 4

  const skills5: number[] = [];
  console.log(
    `Skills: [${skills5}], Max Team Size: ${findMaxTeamSize(skills5)}`,
  ); // Expected: 0
});
