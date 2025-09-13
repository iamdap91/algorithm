describe('the-time-in-words.spec.ts', () => {
  const timeInWord = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
    'twenty one',
    'twenty two',
    'twenty three',
    'twenty four',
    'twenty five',
    'twenty six',
    'twenty seven',
    'twenty eight',
    'twenty nine',
  ];

  function timeInWords(h: number, m: number): string {
    if (m === 0) {
      const hour = timeInWord[h];
      return `${hour} o' clock`;
    }

    // half
    const hour = timeInWord[h];
    if (m === 30) {
      return `half past ${hour}`;
    } else if (m === 15) {
      return `quarter past ${hour}`;
    } else if (m === 45) {
      const hour = timeInWord[h + 1];
      return `quarter to ${hour}`;
    } else if (1 <= m && m < 30) {
      const minute = timeInWord[m];
      const plural = m > 1 ? 'minutes' : 'minute';
      return `${minute} ${plural} past ${hour}`;
    } else if (m > 30) {
      const hour = timeInWord[h + 1];
      const minute = timeInWord[60 - m];
      return `${minute} minutes to ${hour}`;
    }
  }

  it('solution', () => {
    // const result = timeInWords(5, 47);
    const result = timeInWords(5, 2);
    // const result = timeInWords(7, 45);
    console.log(result);
  });
});
