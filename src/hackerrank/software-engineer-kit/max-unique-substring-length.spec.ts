describe('max-unique-substring-length.ts', () => {
  function maxDistinctSubstringLengthInSessions(sessionString: string): number {
    if (sessionString.length === 0 || sessionString === '*') {
      return 0;
    }

    const sessions = sessionString.split('*').filter((s) => s.length > 0);
    let maxLength = 0;

    for (const session of sessions) {
      for (let i = 0; i < session.length; i++) {
        const set = new Set<string>();

        for (let j = i; j < session.length; j++) {
          const char = session.charAt(j);

          if (set.has(char)) {
            break;
          }

          set.add(char);
          maxLength = Math.max(maxLength, set.size);
        }
      }
    }

    return maxLength;
  }

  it('solution', () => {
    // const result = maxDistinctSubstringLengthInSessions('abcabcbb');
    const result = maxDistinctSubstringLengthInSessions('aaabbccdef');
    console.log(result);
  });
});
