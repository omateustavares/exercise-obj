export default class HappyNumber {
  static isHappy(value: number): boolean {
    let repeat = [];

    while (value > 1 && !~repeat.indexOf(value)) {
      let result = 0;

      repeat.push(value);

      for (let n of value.toString().split("")) {
        result += Math.pow(Number(n), 2);
      }

      value = result;
    }

    return value == 1;
  }
}
