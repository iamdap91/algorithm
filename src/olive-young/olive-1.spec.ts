const anagrams = (words: string[]) => {
  const anagramSet = new Set<string>();

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (anagramSet.has(word)) {
      continue;
    }
    const charSet = new Set(word.split(''));

    for (let j = i + 1; j < words.length; j++) {
      const precedingWord = words[j];
      if (anagramSet.has(precedingWord)) {
        continue;
      }

      let hasNonMatch = false;
      for (const char of precedingWord.split('')) {
        if (!charSet.has(char)) {
          hasNonMatch = true;
        }
      }

      if (!hasNonMatch) {
        anagramSet.add(precedingWord);
      }
    }
  }

  console.log(Array.from(anagramSet));
  return words.filter((word) => !anagramSet.has(word));
};

it('anagrams', () => {
  const result = anagrams(['code', 'aaagmnrs', 'anagrams', 'doce']);
  // const result = anagrams(['aaa', 'bbb', 'ccc']);
  console.log(result);
});
