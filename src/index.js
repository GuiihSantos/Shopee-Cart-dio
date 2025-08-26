import * as cartService from "./services/cart.js";
import creatItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your shopee cart!");

const item1 = await creatItem("cama", 300, 2);
const item2 = await creatItem("cama plus size", 54, 1);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// await cartService.deleteItem(myCart, item1.name);
await cartService.removeItem(myCart, item1);
await cartService.removeItem(myCart, item1);
// await cartService.calculateTotal(myCart);
await cartService.displayCart(myCart);
