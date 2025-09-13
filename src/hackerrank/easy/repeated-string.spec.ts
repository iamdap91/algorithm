function repeatedString(str: string, length: number): number {
  const mutiplier = Math.ceil(length / str.length);
  const removeLength = (mutiplier * str.length) % length;

  let aInString = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
      aInString += 1;
    }
  }

  const sliced = str.slice(0, str.length - removeLength);
  let aInSliced = 0;
  for (let i = 0; i < sliced.length; i++) {
    if (str[i] === 'a') {
      aInSliced += 1;
    }
  }

  return aInString * (mutiplier - 1) + aInSliced;
}

it('repeated-string', () => {
  const result = repeatedString('aba', 10);
  console.log(result);
});
