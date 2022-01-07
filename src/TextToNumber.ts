export function transformToNumber(letter: string) {
  const letters = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
    ""
  );

  return letters.findIndex((item) => item === letter);
}

export function valueOfText(text: string) {
  const regex = /[a-zA-Z]+/i;
  const [onlyText] = text.match(regex);
  const breaked = onlyText.split("");

  return breaked.reduce((acc, current) => acc + transformToNumber(current), 0);
}

export function isPrime(num: number) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
