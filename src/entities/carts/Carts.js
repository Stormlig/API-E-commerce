class CartItem {
  constructor(user_id, name, product_id, price, quantity) {
    this.user_id = user_id;
    this.name = name;
    this.product_id = product_id;
    this.price = price;
    this.quantity = quantity;
  }
}

module.exports = { CartItem };
