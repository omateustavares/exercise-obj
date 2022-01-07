import CartShipping from "../ShippingCalculation";

const defaultProduct: Product = {
  id: 1,
  name: "Headset",
  price: 400,
};

const user: User = {
  id: 1,
  name: "Mateus",
  cep: 66025710,
};

test("Deve adicionar um novo produto", () => {
  const add = new CartShipping(user);

  const result = add.addItemOnCart(defaultProduct, 1);

  expect(result).toEqual({
    id: 1,
    user: null,
    itens: [
      {
        quantity: 1,
        product: {
          id: 1,
          name: "Headset",
          price: 400,
        },
        total: 400,
      },
    ],
    total: 400,
  });
});

test("Deve adicionar mais de um item", () => {
  const add = new CartShipping(user);

  const result =
    (add.addItemOnCart(defaultProduct, 1),
    add.addItemOnCart(defaultProduct, 1));

  expect(result).toEqual({
    id: 1,
    user: null,
    itens: [
      {
        quantity: 2,
        product: {
          id: 1,
          name: "Headset",
          price: 400,
        },
        total: 800,
      },
    ],
    total: 800,
  });
});

test("Deve remover um produto", () => {
  const add = new CartShipping(user);

  const result = add.removeItemFromCart(defaultProduct);

  expect(result).toEqual({
    id: 1,
    user: null,
    itens: [],
    total: 0,
  });
});

test("Deve zerar o carrinho", () => {
  const add = new CartShipping(user);

  const result = add.cleanCart();

  expect(result).toEqual({
    id: 1,
    user: null,
    itens: [],
    total: 0,
  });
});
