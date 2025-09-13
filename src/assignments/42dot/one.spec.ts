function canMakeWord(countsByRow: { [key: string]: number }[], word: string) {
  const usage = [false, false, false];

  for (const char of word) {
    let found = false;
    for (let i = 0; i < 3; i++) {
      if (countsByRow?.[i]?.[char] > 0) {
        found = true;
        countsByRow[i][char]--;
        usage[i] = true;
        break;
      }
    }

    if (!found) {
      return false;
    }
  }

  return usage.every((used) => used);
}

function solution1(cardsArray: string[], words: string[]) {
  const cardCounts = cardsArray.map((cards) => {
    const count = {};
    for (const char of cards) {
      count[char] = (count[char] || 0) + 1;
    }
    return count;
  });

  const results = [];
  for (const word of words) {
    const result = canMakeWord(
      cardCounts.map((count) => Object.assign({}, count)),
      word,
    );

    if (result) {
      results.push(word);
    }
  }

  if (results.length === 0) {
    return ['-1'];
  }

  return results;
}

it('one', () => {
  const result = solution1(
    ['AABBCCDD', 'KKKKJJJJ', 'MOMOMOMO'],
    ['AAAKKKKKMMMMM', 'ABCDKJ'],
  );
  console.log(result);
});
