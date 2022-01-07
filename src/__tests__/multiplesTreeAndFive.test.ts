import MultipleCalc from "../MultipleCalc";

const TestComponent = (toTest: Function) => {
  try {
    toTest();
  } catch (error) {
    return error.message;
  }
};

test("a soma dos multiplos de 3 e 5 abaixo de 1000 tem que ser igual a 233168", () => {
  const multiple = new MultipleCalc(1000);

  const result = multiple.play([3, 5]);

  expect(result).toEqual(233168);
});

test("a soma dos multiplos de 3 e 5 abaixo de 1000 tem que ser igual a 233168", () => {
  const multiple = new MultipleCalc(1000);

  const result = multiple.play([3, 5]);

  expect(result).toEqual(233168);
});

test("se o limite não for um número natural, deve-se retornar um erro", () => {
  expect(TestComponent(() => new MultipleCalc(100.2))).toBe(
    "o limite deve ser um número natural"
  );
});

test("a soma dos multiplos de 3 ou 5 e 7 abaixo de 1000 tem que ser igual a 33173", () => {
  const multiple = new MultipleCalc(1000);

  const result = multiple.play([3, 5], 7);

  expect(result).toEqual(33173);
});
