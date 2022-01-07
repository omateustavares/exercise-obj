export const isMultiple = (value: number, base: number): boolean => {
  return base % value === 0;
};

export default class MultipleCalc {
  limit: number;
  constructor(limit: number) {
    if (Math.floor(limit) === limit) {
      this.limit = limit;
    } else {
      throw new Error("o limite deve ser um número natural");
    }
  }

  play(multiples: number[], extraMultiple?: number): number {
    let sum = 0;

    for (let i = 0; i < this.limit; i++) {
      if (extraMultiple && !isMultiple(extraMultiple, i)) {
        continue;
      }

      if (!multiples.find((item) => isMultiple(item, i))) {
        continue;
      }

      sum += i;
    }
    return sum;
  }
}
