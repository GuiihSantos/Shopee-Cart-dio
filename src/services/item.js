async function creatItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subtotal: () => {
      const priceTotal = price * quantity;
      return priceTotal;
    },
  };
}

export default creatItem;
