import { isPrime, transformToNumber, valueOfText } from "../TextToNumber";
import HappyNumber from "../HappyNumber";
import { isMultiple } from "../MultipleCalc";

test('deve retornar o número 15 quando a letra "o" é fornecida', () => {
  const result = transformToNumber("o");

  expect(result).toBe(15);
});

test('deve retornar o número 113 quando a palavra "Matheus" é fornecida', () => {
  const result = valueOfText("Matheus");

  expect(result).toBe(113);
});

test("deve retornar true se o a palavra fornecida for um número primo", () => {
  const value = valueOfText("Matheus");

  const prime = isPrime(value);

  expect(prime).toBe(true);
});

test("deve retornar true se o a palavra fornecida for um número feliz", () => {
  const value = valueOfText("fa");

  const happy = HappyNumber.isHappy(value);

  expect(happy).toBe(true);
});

test("deve retornar true se o a palavra fornecida for um número múltiplo de 3 ou 5", () => {
  const value = valueOfText("f");

  const multiple = isMultiple(3, value) || isMultiple(5, value);

  expect(multiple).toBe(true);
});
