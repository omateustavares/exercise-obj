export default class CartShipping implements Cart {
  id = 1;
  itens = [];
  total = 0;

  constructor(public user: User) {}

  getTotalCart = () => {
    return this.itens.reduce((acc, curr: CartItem) => curr.total + acc, 0);
  };

  getItemTotal = (item: CartItem) => {
    return item.quantity * item.product.price;
  };

  findProductInCartItens = (
    product: Product
  ): { item: CartItem; index: number } => {
    return {
      item: this.itens.find((item: CartItem) => item.product.id === product.id),
      index: this.itens.findIndex(
        (item: CartItem) => item.product.id === product.id
      ),
    };
  };

  addItemOnCart = (product: Product, quantity: number) => {
    const founded = this.findProductInCartItens(product);
    if (founded.item) {
      founded.item.quantity += quantity;
      founded.item.total = this.getItemTotal(founded.item);
      this.itens[founded.index] = founded.item;
    } else {
      this.itens.push({
        quantity: 1,
        product,
        total: product.price,
      });
    }
    return { id: 1, itens: this.itens, total: this.getTotalCart(), user: null };
  };

  removeItemFromCart = (product: Product) => {
    const founded = this.findProductInCartItens(product);
    if (founded.item) {
      if (founded.item.quantity === 1) {
        this.itens.splice(founded.index, 1);
      } else {
        founded.item.quantity -= 1;
        founded.item.total = this.getItemTotal(founded.item);
      }
      this.itens[founded.index] = founded.item;
    }

    return { id: 1, itens: this.itens, user: null, total: this.getTotalCart() };
  };

  cleanCart = () => {
    this.itens = [];

    return { id: 1, itens: this.itens, user: null, total: this.getTotalCart() };
  };
}
