import HappyNumber from "../HappyNumber";

test("a função deve retornar true quando o número 7 é fornecido", () => {
  const expected = true;
  const result = HappyNumber.isHappy(7);

  expect(result).toEqual(expected);
});

test("a função deve retornar false quando o número 8 é fornecido", () => {
  const expected = false;

  const result = HappyNumber.isHappy(8);

  expect(result).toEqual(expected);
});
